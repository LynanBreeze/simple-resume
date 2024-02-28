<script>
  import qs from "query-string";
  import rawTranslations from "./translations.json";
  import { resumeData, linksMap } from "./data";
  import { tick, onMount } from "svelte";

  let print = false;
  const languages = Object.keys(resumeData);
  const queryLocale = qs.parse(location.search).locale || "";
  let locale = languages.includes(queryLocale)
    ? queryLocale
    : languages.indexOf("en")
      ? "en"
      : languages[0];

  $: data = resumeData[locale];
  $: translations = rawTranslations[locale];
  $: if (locale) {
    document.title = `${data.expectedJob}-${data.name}`;
  }

  const switchLocale = (targetLocale) => {
    if (targetLocale !== locale) {
      locale = targetLocale;
      const newUrl = new URL(location.href);
      newUrl.search = `?locale=${targetLocale}`;
      window.history.replaceState({}, null, newUrl.href);
    }
  };

  const printPage = async () => {
    print = true;
    await tick();
    window.print();
  };

  onMount(() => {
    addEventListener("beforeprint", (event) => {
      print = true;
    });
  });

  const formatContentLink = (text) => {
    const keys = Object.keys(linksMap);
    let res = text;
    keys.forEach((key) => {
      const reg = new RegExp(`${key}`, "g");
      res = res.replace(
        reg,
        `<a class="content-link" href="${linksMap[key]}" target="_blank">${key}</a>`
      );
    });
    return res;
  };
</script>

<div class={`content-wrapper ${locale}`}>
  <div class="content">
    <div class="header">
      <div class="avatar-name">
        {#if data.avatarUrl}
          <a href={data.avatarLink}
            ><img class="avatar" src={data.avatarUrl} alt="" /></a
          >
        {/if}
        <div class="right">
          <div class="name">{data.name}</div>
          <div class="location-status">
            <span>📍{data.currentCity}</span>
            <span class="status">{data.currentStatus}</span>
          </div>
        </div>
      </div>
      <div class="header-item experience-years">
        <span class="expected-job mgr-2">{data.expectedJob}</span>
        <span class="years-of-experience">{data.yearsOfExperience}</span>
      </div>
      <div class="header-item">
        <div class="mgr-2">
          <span class="mgr-1">{translations["phone"]}:</span><a
            class="phone-number content-link"
            href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a
          >{#if print}
            <a
              class="phone-number content-link print"
              href={`tel:${data.phoneNumber.replace("****", data.magicCode)}`}
              >{data.phoneNumber.replace("****", data.magicCode)}</a
            >
          {/if}
        </div>
        <div>
          <span class="mgr-1">{translations.email}:</span><a
            class="content-link email"
            href={`mailto:${data.email}`}>{data.email}</a
          >
        </div>
      </div>
      {#if data.introduction}
        <div class="header-item introduction content-text">
          {@html data.introduction}
        </div>
      {/if}
      {#if data.skillTags && data.skillTags.length}
        <div class="header-item">
          <div class="tags">
            {#each data.skillTags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      {/if}
      <div class="switch-locale no-print">
        {#each languages as language, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            class={`locale-item ${locale === language ? "active" : ""}`}
            on:click={() => switchLocale(language)}
            >{resumeData[language]["language"]}</span
          >
          {#if index !== languages.length - 1}
            <span>/</span>
          {/if}
        {/each}
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="print-btn no-print" on:click={printPage}>
        {translations.print}
      </div>
    </div>
    <div class="body">
      <div class="section">
        <div class="section-title">
          <span>{translations.workedCompanies}</span>
        </div>
        <div>
          {#each data.workedCompanies as workedCompany}
            <div class="company-item">
              <div class="title-date">
                <div class="left">
                  <div class="ex-title">
                    {#if workedCompany.link}
                      <a
                        class="content-link"
                        href={workedCompany.link}
                        target="_blank"
                        rel="noreferrer">{workedCompany.name}</a
                      >
                    {:else}
                      <span>{workedCompany.name}</span>
                    {/if}
                    {#if workedCompany.type}
                      <div class="ex-subtitle">{workedCompany.type}</div>
                    {/if}
                    <div class="subtitle">
                      {workedCompany.jobTitle}
                    </div>
                  </div>
                </div>
                <div class="date-range">
                  <span class="range">{workedCompany.dateRange}</span><br />
                  <span class="years">{workedCompany.dateRangeYears}</span>
                </div>
              </div>

              {#if workedCompany.tags && workedCompany.tags.length}
                <div class="tags">
                  {#each workedCompany.tags as experienceTag}
                    <span class="tag">{experienceTag}</span>
                  {/each}
                </div>
              {/if}
              <div class="projects">
                {#each workedCompany.projects as project}
                  <div class="project-item">
                    <!-- <div class="title">
                      {@html project.title}
                    </div> -->
                    {#if project.description}
                      <div class="description">{project.description}</div>
                    {/if}
                    <div class="duties content-text">
                      {#each project.duties as duty, index}
                        <div class="list-item">
                          <div class="item-content">
                            <span class="item-index"
                              >{@html `${index + 1}.`}</span
                            >
                            <span>{@html formatContentLink(duty)}</span>
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      {#if data.projects && data.projects.length}
        <div class="section">
          <div class="section-title">{translations.projects}</div>
          <div class="projects">
            {#each data.projects as project}
              <div class="project-item">
                <div class="title">
                  {@html project.title}
                </div>
                {#if project.description}
                  <div class="description">{project.description}</div>
                {/if}
                <div class="duties">
                  {#each project.duties as duty, index}
                    <div class="list-item content-text">
                      <div class="item-content">
                        <span class="item-index">{@html `${index + 1}.`}</span>
                        <span>{@html formatContentLink(duty)}</span>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div class="section">
        <div class="section-title">
          <span>{translations.education}</span>
        </div>
        <div>
          {#each data.education as education}
            <div class={`education-item ${locale}`}>
              <div class="title-date">
                <div class="left">
                  <div class="ex-title">{education.name}</div>
                  <div class="ex-subtitle">{education.degree}</div>
                </div>
                <div class="date-range">
                  <span class="range">{education.dateRange}</span>
                </div>
              </div>
              <div class="subtitle">
                {education.major}
              </div>
            </div>
          {/each}
        </div>
      </div>

      {#if data.certificates.items.length}
        <div class="section certificates">
          <div class="section-title">
            <span>{translations.certificates}</span>
          </div>
          {#each data.certificates.items as certificate}
            <div class="list-item">
              <div class="item-content">{certificate}</div>
            </div>
          {/each}
        </div>
      {/if}

      <div class="section languages">
        <div class="section-title">
          <span>{translations.languages}</span>
        </div>
        {#each data.languages.items as language}
          <div class="list-item">
            <div class="item-content">{language}</div>
          </div>
        {/each}
      </div>

      <div class="section">
        <div class="section-title">
          <span>{translations.links}</span>
        </div>
        {#each data.links.items as link}
          <div class="list-item">
            <div class="item-content">
              <span class="item-title">{link.title}</span>
              <a
                class="content-link"
                href={link.href}
                target="_blank"
                rel="noreferrer">{link.href}</a
              >
            </div>
          </div>
        {/each}
      </div>
    </div>

    {#if data.footer}
      <div class="footer no-print">
        {@html data.footer}
      </div>
    {/if}
  </div>
</div>
