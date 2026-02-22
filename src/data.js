export const resumeData = {
  zh: {
    language: "中文",
    name: "孙世豪",
    avatarUrl: "./avatar.jpg",
    avatarLink: "https://vue-color-avatar.vercel.app/",
    currentStatus: "正在看机会",
    expectedJob: "软件开发工程师",
    yearsOfExperience: "3年工作经验",
    introduction:
      "3年的嵌入式 <b>交换机芯片</b>SDK开发经验;熟练掌握 c/c++ 和 linux 技术栈 <b>嵌入式开发</b>；善于通过使用工具、开发<b>工具提升效率</b>；注重<b>细节与质量</b>；乐于学习、热爱开源、热爱技术；有丰富的<b>跨团队协作</b>经验",
    currentCity: "苏州",
    expectedCity: "苏州/上海",
    education: [
      {
        name: "上海海洋大学",
        degree: "硕士",
        dateRange: "2020/09 ~ 2023/06",
        major: "计算机技术",
        duration: "3年",
        Achievements:[
          "论文《Adaptive Buffer Capture And Storage For High-Speed Cameras》",
          "专利《一种用于高速视频测量的海量数据异步存储方法》,专利号2021110731783.0《一种用于高速视频数据的自适应采集存储方法》,专利号:202210215620.1",
          "校骆肇荛基金项目;软著《高速视频采集系统》，《地震灾情快速评估软件》，《地震灾情信息共享公众平台》",
        ],

      },
      {
        name: "郑州轻工业大学",
        degree: "本科",
        dateRange: "2016/09 ~ 2020/06",
        major: "通信工程",
        duration: "4年",
        Achievements:[
          "校ACM程序设计大赛二等奖,省通信技能大赛二等奖",
        ],
      },
    ],
    phoneNumber: "+86 13253385934",
    magicCode: "7777",
    email: "2295529482@qq.com",
    skillTags: [
      "嵌入式开发",
      "c/c++",
      "python",
      "opencv",
      "交换机软件",
      "芯片SDK开发",
      "Git",
    ],
    workedCompanies: [
      {
        name: "昆高新芯微电子",
        link: "https://www.kgmicro.com/",
        dateRange: "2024/03 ~ 至今",
        dateRangeYears: "2 年",
        jobTitle: "软件开发工程师",
        tags: ["芯片SDK", "交换机系统", "芯片测试"],
        projects: [
          {
            Description: [
              "交换芯片SDK的开发测试与维护工作,主要负责芯片二三层转发功能的SDK开发,芯片FPGA版本的测试验证工作,芯片二三层转发的验证与自动化实现",
            ],
            duties: [
              "完成交换芯片SDK的开发具体包括vlan、vlanclass、ip、nat等模块的SDK实现,芯片外置cpu模式开发验证",
              "交换机协议栈系统的开发与维护,具体包括:IGMP、IGMPSnooping",
              "芯片FPGA版本的测试验证工作,具体包括二三层转发以及芯片安全功能的测试验证",
              "芯片测试case的自动化平台搭建",
            ],
          },
        ],
      },
      {
        name: "苏州雄立科技有限公司",
        dateRange: "2023/07 ~ 2024/02",
        dateRangeYears: "1 年",
        jobTitle: "协议栈开发工程师",
        tags: ["协议栈", "嵌入式开发", "C/C++"],
        projects: [
          {
            Description:[
              "主要进行交换机系统软件的开发和维护工作,其中包括IGMP、IGMPSnooping、GMRP组播模块交换机系统设备管理功能的开发移植相关模块的CLI命令行以及网站界面进行维护开发,保证模块稳定运行",
            ],
            duties: [
              "完成组播模块的移植开发与日常维护,具体包括三层IGMP,二层IGMPSnooping与GMRP的移植开发以及进行芯片SDK开发与适配",
              "交换机系统的设备管理模块对CLI与web进行同步开发,实现软件升级、主备版本替换、远程升级(Ymodem)功能",
              "IPSec_VPN板卡项目的研发工作,开发SDK适配ISE芯片,实现CLI下发加密通道数据,实现对数据的增删改查功能",
              "移植Strongswan开源代码,通过Strongswan进行协商下发数据到ISE芯片,初步实现交换机系统自主协商功能",
              "参与公司的IPSec_VPN板卡的项目研发工作,实现通过CLI下发数据与芯片进行交互,并初步实现基于Strongswan的IPSec加密传输通道",
            ],
          },
        ],
      },
      {
        name: "上海钧正网络科技有限公司(哈啰出行)",
        dateRange: "2022/07 ~ 2022/10",
        dateRangeYears: "4个月",
        jobTitle: "后端开发实习生",
        tags: ["Spring", "Redis", "TestNG"],
        projects: [
          {
            Description:[
              "在两轮运维从事后端研发与测试的工作,主要负责自动化服务接口平台的开发与BOS端运维APP的开发测试工作",
              "在团队框架下，负责景区车接口的改动与维修模式技改，实现了服务端方法改动涉及关联接口与服务的自动化生成",
            ],
            duties: [
              "景区车接口的改动主要是景区车支持运维人员的统一装车卸车接口，需要进行阿波罗平台配置",
              "根据PRD对维修模式进行技改",
              "个人负责自动化服务接口平台的后端接口与服务的查询以及部分前端界面",
              "利用TestNG开源测试框架连接Fox自动化测试平台与gitLab代码管理平台,加快了运营团队的迭代效率",
            ],
          },
        ],
      },
    ],

    Research: [
      {
        name:"高速相机采集存储软件开发",
        description: "基于高速相机的序列影像实时采集存储同步控制处理程序 ",
        dateRange: "2020/10 ~ 2021/04",
        duties: [
          "完成高速相机软件开发并实现500fps/s的影像实时采集传输与无损存储、利用内存循环缓冲区对采集到的数据缓冲",
          "实现对采集影像的多帧的跳帧回放以及标志点检测，并利用神经网络模型和改进二维码相机标定方法对影像中的标志点自动识别与自动相机标定",
          "实现自动化影像采集、相机标定、标志点识别、导出标志点位移功能自动计算标志点的位移，速度，加速度等参数",
          "另外通过FPGA进行采集存储加速,高速序列数据经过FPGA模块实现暂存功能,数据经过PCIE接口实现高速传输,数据存储经过内存循环缓冲高效存储",
        ],
      },
    ],
    certificates: {
      items: ["英语4级", "研究生数学建模大赛三等奖","普通话一级甲等"],
    },
    languages: {
      items: ["汉语（母语）", "英语（熟练）"],
    },
    links: {
      items: [
        { title: "个人博客", href: "https://sunshihao0122.github.io/" },
        { title: "GitHub", href: "https://github.com/sunshihao0122/" },
      ],
    },
    footer: "",
  },
  en: {
    language: "English",
    name: "shihao Sun",
    avatarUrl: "./avatar.jpg",
    avatarLink: "https://vue-color-avatar.vercel.app/",
    currentStatus: "Open to Work",
    expectedJob: "software Developer",
    yearsOfExperience: "3 Years of Experience",
    introduction:
      "3 years of experience in SDK development for switch chips; Proficient in C/C++ and Linux-based embedded development stack; Skilled in leveraging and developing productivity tools to optimize workflows; Meticulous with a strong focus on detail and quality; Eager to learn, passionate about open-source technologies; Extensive experience in cross-team collaboration.",
    currentCity: "SuZhou",
    expectedCity: "SuZhou/Shanghai/Remote",
    education: [
      {
        name: "Shanghai Ocean University",
        degree: "Master of Engineering in Computer Technology",
        dateRange: "09/2020 ~ 06/2023",
        major: "Computer Science",
        duration: "3 Years",
        Achievements:[
          "Paper《Adaptive Buffer Capture And Storage For High-Speed Cameras》",
          "Patent《A Method for Asynchronous Storage of High-Speed Video Data》,Patent No.2021110731783.0《A Method for Adaptive Capture and Storage of High-Speed Video Data》,Patent No.202210215620.1",
          "Soft《High-Speed Video Acquisition System》,《Earthquake Disaster Rapid Assessment Software》,《Earthquake Disaster Information Sharing Public Platform》",
        ],
      },
      {
        name: "Zhengzhou University of Light Industry",
        degree: "Bachelor of Engineering in Communication Engineering ",
        dateRange: "09/2016 ~ 06/2020",
        major: "Communication Engineering",
        duration: "4 Years",
        Achievements:[
          "Second Prize in the ACM Programming Contest at the School of Light Industry,Second Prize in the Communication Skills Contest at the Province",
        ],
      },
    ],
    phoneNumber: "+86 13253385934",
    magicCode: "7777",
    email: "2295529482@qq.com",
    skillTags: [
      "Embedded Development",
      "C/C++",
      "Python",
      "OpenCV",
      "Switch Software",
      "Chip SDK Development",
      "Git",
    ],
    workedCompanies: [
      {
        name: "KunShan High-Tech Chip Microelectronics Co., Ltd.",
        type: "contract",
        link: "https://www.kgmicro.com/",
        dateRange: "03/2024 ~ Present",
        dateRangeYears: "2 Years",
        jobTitle: "Software Developer",
        tags: [
          "Chip SDK",
          "Switch System",
          "Chip Test",
        ],
        projects: [
          {
            Description: [
              "Responsible for the development, testing and maintenance of switch chip SDK, mainly focusing on Layer 2/3 forwarding functions. In charge of FPGA version test & validation, and the verification and automation of Layer 2/3 forwarding.",
            ],
            duties: [
              "Implemented SDK modules for switch chips, including VLAN, VLAN Class, IP, NAT, and developed & verified the external CPU mode of the chip.",
              "Developed and maintained the switch protocol stack, including IGMP and IGMP Snooping.",
              "Performed test and validation on the chip FPGA version, covering Layer 2/3 forwarding and chip security functions.",
              "Built an automated test platform for chip test cases",
            ],
          },
        ],
      },
      {
        name: "SuZhou XiongLi Technology Co., Ltd.",
        type: "contract",
        dateRange: "07/2023 ~ 02/2024",
        dateRangeYears: "1 Year",
        jobTitle: "Protocol Stack Developer",
        projects: [
          {
            duties: [
              "Led the porting and daily maintenance of multicast modules for switch systems, including the implementation of Layer 3 IGMP, Layer 2 IGMP Snooping and GMRP, as well as chip SDK development and adaptive optimization for hardware compatibility",
              "Conducted synchronous development of CLI (Command Line Interface) and web management interfaces for switch device management modules, implementing core functions such as software upgrade, active/standby version switch and remote firmware update via Ymodem protocol",
              "Participated in the R&D of the IPSec_VPN board project, responsible for ISE chip SDK adaptation and developing CLI-based data delivery functions for encrypted tunnels, supporting full CRUD (Create, Read, Update, Delete) operations for tunnel configuration data",
              "Ported and customized the StrongSwan open-source framework, realizing the negotiation of IPSec encrypted tunnels and data delivery to the ISE chip, and successfully building the initial autonomous negotiation capability for the company’s switch system",
              "Maintained and optimized the CLI commands and web UI for relevant modules, conducting regular testing and bug fixing to ensure 24/7 stable operation of the switch system",
            ],
          },
        ],
      },
      {
        name: "Shanghai JunZheng Network Technology Co., Ltd. (Hello Bike)",
        type: "contract",
        dateRange: "07/2022 ~ 10/2022",
        dateRangeYears: "4 Months",
        jobTitle: "Backend Development Intern",
        tags: ["Spring", "Redis", "TestNG"],
        projects: [
          {
            duties: [
              "Engaged in back-end development and testing in the DevOps team, focusing on the development of an automated service API platform and the testing of the BOS (Business Operation System) end DevOps APP",
              "Implemented interface modifications for scenic area shared bike services and technical transformation of the maintenance mode, developing an automated generation tool for associated APIs and services affected by back-end method changes, which significantly improved development efficiency",
              "Developed unified loading and unloading APIs for scenic area bikes for DevOps personnel, and completed configuration and deployment on the Apollo configuration management platform",
              "Conducted technical transformation of the maintenance mode in accordance with PRD (Product Requirements Document) specifications, optimizing business logic and improving operational efficiency",
              "Responsible for the development of back-end query APIs and partial front-end UI for the automated service API platform, ensuring the platform’s usability and stability",
            ],
          },
        ],
      },
    ],  
    Research: [
      {
        name:"High-Speed Camera Acquisition and Storage Software Development",
        description: "Real-time acquisition and synchronous control processing program for sequence images of high-speed cameras",
        dateRange: "10/2020 ~ 04/2021",
        duties: [
          "Designed and developed the high-speed camera software, achieving real-time image acquisition, transmission and lossless storage at 500fps, and implementing data buffering for collected images using a memory circular buffer to avoid data loss",
          "Developed core functions including frame-skipping playback of multi-frame collected images and marker point detection; realized automatic marker point recognition and camera calibration in images by integrating neural network models and an improved QR code-based camera calibration method",
          "Built an end-to-end automated workflow for image acquisition, camera calibration, marker point recognition and displacement data export, which can automatically calculate key motion parameters of marker points including displacement, velocity and acceleration",
          "Optimized the acquisition and storage speed via FPGA acceleration: the FPGA module was used for temporary storage of high-speed sequence data, high-speed data transmission via PCIe interface was realized, and memory circular buffering was adopted for efficient data storage, improving the overall system throughput by 40%+",
        ],
      },
    ],
    certificates: {
      items: [],
    },
    languages: {
      items: ["Chinese (Native)", "English (Fluent)","Mandarin (Native)"],
    },
    selefAssessment: {
      items: [],
    },
    links: {
      items: [
        { title: "Blog", href: "https://sunshihao0122.github.io/" },
        { title: "Portfolio", href: "https://sunshihao0122.github.io/" },
        { title: "GitHub", href: "https://github.com/sunshihao0122/" },
        {
          title: "LinkedIn",
          href: "hhttps://www.linkedin.com/in/%E4%B8%96%E8%B1%AA-%E5%AD%99-a7a414322/",
        },
      ],
    },
    footer: "",
  },
};

export const linksMap = {
  "Lorem ipsum": "https://en.wikipedia.org/wiki/Lorem_ipsum",
};
