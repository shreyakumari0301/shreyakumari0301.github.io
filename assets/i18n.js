(() => {
  const dict = {
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.publications": "Publications",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "sec.profile": "Profile",
      "sec.experience": "Experience",
      "sec.publications": "Publications",
      "sec.projects": "Projects",
      "sec.education": "Education",
      "sec.skills": "Skills",
      "sec.contact": "Contact",
      "hero.eyebrow": "Research Engineer · MedOS Tech · Abu Dhabi",
      "hero.lead": "Research Engineer in Machine Learning at MedOS Tech",
      "hero.chip1": "MedOS Tech · Research Engineer",
      "hero.chip2": "IIT Madras · B.S. Data Science",
      "hero.chip3": "5 papers under review",
      "hero.chip4": "Chennai, India",
      "hero.cta": "Experience",
      "about.title": "Work",
      "about.work":
        'Shreya is a Research Engineer at <a href="https://medos.tech/" rel="noopener">MedOS Tech</a> in Abu Dhabi, working on agentic LLM systems, RAG, memory, and evaluation. She collaborates with <strong>Prof. Imran Razzak</strong> at MBZUAI on clinical-trial <strong>World Models</strong>, and with <strong>Prof. Zhiguang Cao</strong> at SMU on <strong>FAROS</strong>, a <strong>World Model</strong> planner for dynamic vehicle routing. She also worked at MI Lab, IIT Madras on TransChem and Archemist (ROS-based robotic materials discovery), and built <a href="https://gurusetu.iitm.ac.in" rel="noopener">GuruSetu</a> at CIFIL Lab, IIT Madras. Her research has three threads: agentic retrieval and routing, LLM memory infrastructure, and World Models for science and planning. She is completing a B.S. in Data Science and Applications at IIT Madras.',
      "stat.1b": "LLMs & RAG",
      "stat.1s": "routing, memory, agents",
      "stat.2b": "World Models",
      "stat.2s": "clinical + combinatorial",
      "stat.3b": "Evaluation",
      "stat.3s": "SWE-bench & harnesses",
      "stat.4b": "5",
      "stat.4s": "active submissions",
      "badge.current": "current",
      "exp.medos.when": "Jul 2026 – Present",
      "exp.medos.role": "Research Engineer",
      "exp.medos.org": "MedOS Tech · Abu Dhabi, UAE",
      "exp.medos.b1":
        "Built <strong>CTA-RAG</strong>, an agentic CTI system with task-aware retrieval and routing (<strong>99.78%</strong> routing accuracy on <strong>4,560</strong> benchmark items).",
      "exp.medos.b2":
        "Designed an <strong>LLM memory</strong> / knowledge-operations layer; improved retrieval <strong>0.55→0.99</strong> while cutting stored memories <strong>9×</strong>.",
      "exp.medos.b3":
        "Built an instrumented <strong>SWE-bench Verified</strong> agent harness for architecture and failure-mode evaluation.",
      "exp.cao.when": "2026 – Present",
      "exp.cao.role": "Research Collaborator",
      "exp.cao.org": "with Zhiguang Cao · Singapore Management University (SMU)",
      "exp.cao.b1":
        "Developing <strong>FAROS</strong>, a <strong>World Model</strong> planner for dynamic routing that imagines future customer requests to score routing and waiting actions.",
      "exp.cao.b2":
        "Built a deadline-constrained dynamic <strong>CVRP200</strong> benchmark with scenario evaluation and strong waiting/oracle baselines.",
      "exp.cao.b3":
        "Cut travel distance by <strong>21%</strong> vs nearest dispatch (<strong>20.1 vs 25.5</strong>) while meeting deadlines on all <strong>40</strong> test days.",
      "exp.mbzuai.when": "Mar 2026 – Jun 2026",
      "exp.mbzuai.role": "Research Collaborator",
      "exp.mbzuai.org":
        "with Imran Razzak · Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
      "exp.mbzuai.b1":
        "Built an evidence-driven clinical-trial <strong>World Model</strong> (OpenFDA, PubMed, DrugBank) with ~3.6k/1.2k train/eval transitions.",
      "exp.mbzuai.b2":
        "Developed an <strong>LLM rule compiler</strong> extracting <strong>30+</strong> typed simulator parameters from drug labels and literature.",
      "exp.mbzuai.b3":
        "Held-out evaluation vs <strong>4 baselines</strong> with <strong>50+</strong> automated tests for calibrated treatment-response simulation.",
      "exp.milab.when": "Jan 2026 – Jul 2026",
      "exp.milab.role": "ML Intern",
      "exp.milab.org": "MI Lab, IIT Madras",
      "exp.milab.b1":
        "<strong>TransChem</strong> (Shell plc): molecular representations + MLP for ionic-liquid Td prediction; <strong>R² = 0.85</strong> (vs 0.81 classical baseline).",
      "exp.milab.b2":
        "<strong>Archemist</strong> (Cooper Group): cut fabrication time from ~40h to <strong>6–8h</strong> per experiment through autonomous physical execution and scheduling.",
      "exp.milab.b3":
        "Extended Archemist with lab stations and <strong>ROS</strong>-based robotic control for closed-loop, physical materials discovery.",
      "exp.cifil.when": "Jul 2025 – Dec 2025",
      "exp.cifil.role": "Research Intern",
      "exp.cifil.org": "CIFIL Lab, IIT Madras",
      "exp.cifil.b1":
        'Built and deployed <strong>GuruSetu</strong> (<a href="https://gurusetu.iitm.ac.in" rel="noopener">gurusetu.iitm.ac.in</a>) — full-stack system with database, backend APIs, and React frontend.',
      "exp.quant.when": "Jun 2025",
      "exp.quant.role": "Quant Developer",
      "exp.quant.org": "QuantHive · IIT Madras Research Park",
      "exp.quant.b1":
        "Built a modular <strong>event-driven backtesting engine</strong> with market, signal, order, and fill events.",
      "exp.quant.b2":
        "GPU kernels (CUDA / Numba / CuPy) for <strong>15×</strong> speedup on <strong>1M+</strong> datapoints.",
      "pub.1.t": "An Operations Layer for LLM-Maintained Personal Knowledge Bases",
      "pub.1.a": "<strong>Shreya Kumari</strong>, Habib Baluwala, Bandar AlShammari",
      "pub.2.t":
        "SecondRead: Rereading Visual Evidence for Cheap Multi-Task Medical Vision-Language Generation",
      "pub.2.a": "Ashish Mehta, <strong>Shreya Kumari</strong>, Abhijit Das, Imran Razzak",
      "pub.3.t": "GEM: Graph-Based Evolutionary Metacognition for Self-Improving Language Agents",
      "pub.3.a":
        "Abhijit Das, Ashish Mehta, Debasmita Biswas, <strong>Shreya Kumari</strong>, Nichula Sathmith Wasalathilaka, Behzad Bozorgtabar, Dwarikanath Mahapatra, Imran Razzak",
      "pub.4.t": "ViTA: Visual Tool Synthesis for Self-Evolving Agents",
      "pub.4.a":
        "Abhijit Das, Debasmita Biswas, <strong>Shreya Kumari</strong>, Nichula Sathmith Wasalathilaka, Dwarikanath Mahapatra, Imran Razzak",
      "pub.5.t":
        "Route Before You Retrieve: Contract-Bound, Cognitive-Task-Aware RAG for Cyber Threat Intelligence",
      "pub.5.a":
        "Muna Al-Hawawreh; <strong>Shreya Kumari</strong>; Muhammad Hammad; Ashish Mehta; Hirusha Adikari; Habib Baluwala; Bandar Alshammari",
      "proj.wm.t": "Clinical Trial World Model",
      "proj.wm.d":
        "Evidence-driven world model using OpenFDA, PubMed, and DrugBank for treatment-response simulation — MBZUAI collaboration (Prof. Imran Razzak).",
      "proj.faros.t": "FAROS · World-Model Planning for Dynamic Vehicle Routing",
      "proj.faros.d":
        "Generative <strong>World Model</strong> of future requests for dynamic CVRP; <strong>21%</strong> shorter travel vs nearest dispatch. With <strong>Zhiguang Cao, SMU</strong>.",
      "proj.guru.t": "GuruSetu",
      "proj.guru.d":
        "Full-stack platform at CIFIL Lab, IIT Madras — database, backend APIs, and React frontend.",
      "proj.council.t": "Cross-Model Reasoning · LLM Council",
      "proj.council.d":
        "3-model generate–critique–synthesize council (Groq, Ollama, Mistral) with agreement scoring and confidence-aware fallback.",
      "proj.bt.t": "Event-Driven Backtesting Engine",
      "proj.bt.d":
        "Modular Python engine with market/signal/order/fill events; CUDA/Numba/CuPy kernels for <strong>15×</strong> speedup on 1M+ points.",
      "tag.wm": "World Models",
      "tag.clinical": "Clinical AI",
      "tag.dvrp": "Dynamic VRP",
      "tag.fullstack": "Full-stack",
      "tag.multiagent": "Multi-agent",
      "tag.eval": "Evaluation",
      "tag.quant": "Quant",
      "tag.tool": "Tool Calling",
      "tag.english": "English (fluent)",
      "edu.degree": "Degree",
      "edu.detail":
        "<strong>B.S. in Data Science &amp; Applications</strong><br>Indian Institute of Technology Madras<br>2023 – Sept 2026 · CGPA <strong>8.49/10</strong>",
      "edu.refs": "Referees",
      "edu.ref1":
        '<strong>Abhijit Das</strong> — CTO, MedOS Tech<br><a href="mailto:abhijit.das@mbzuai.ac.ae">abhijit.das@mbzuai.ac.ae</a>',
      "edu.ref2":
        '<strong>Prof. Rohit Batra</strong> — IIT Madras / WSAI<br><a href="mailto:rbatra@smail.iitm.ac.in">rbatra@smail.iitm.ac.in</a>',
      "skills.llm": "LLM & agents",
      "skills.ml": "ML / AI",
      "skills.sys": "Systems",
      "skills.lang": "Languages",
      "contact.blurb":
        "Based in <strong>Chennai, India</strong> · open to research collaborations on medical AI, LLMs, agentic systems, and world models.",
      "contact.phone": "Phone",
      "contact.email": "Email",
    },
    zh: {
      "nav.about": "简介",
      "nav.experience": "经历",
      "nav.publications": "论文",
      "nav.projects": "项目",
      "nav.education": "教育",
      "nav.skills": "技能",
      "nav.contact": "联系",
      "sec.profile": "简介",
      "sec.experience": "经历",
      "sec.publications": "论文",
      "sec.projects": "项目",
      "sec.education": "教育",
      "sec.skills": "技能",
      "sec.contact": "联系",
      "hero.eyebrow": "研究工程师 · MedOS Tech · 阿布扎比",
      "hero.lead": "MedOS Tech 机器学习研究工程师",
      "hero.chip1": "MedOS Tech · 研究工程师",
      "hero.chip2": "印度理工学院马德拉斯分校 · 数据科学学士",
      "hero.chip3": "5 篇论文审稿中",
      "hero.chip4": "印度钦奈",
      "hero.cta": "经历",
      "about.title": "工作",
      "about.work":
        'Shreya 是阿布扎比 <a href="https://medos.tech/" rel="noopener">MedOS Tech</a> 的研究工程师，专注于智能体大语言模型系统、RAG、记忆与评估。她与 MBZUAI 的 <strong>Imran Razzak 教授</strong>合作研究临床试验<strong>世界模型</strong>，并与新加坡管理大学（SMU）的 <strong>Zhiguang Cao 教授</strong>合作开发 <strong>FAROS</strong>——面向动态车辆路径规划的<strong>世界模型</strong>规划器。她还曾在印度理工学院马德拉斯分校 MI Lab 从事 TransChem 与 Archemist（基于 <strong>ROS</strong> 的机器人材料发现）研究，并在 CIFIL Lab 构建了 <a href="https://gurusetu.iitm.ac.in" rel="noopener">GuruSetu</a>。她的研究有三条主线：智能体检索与路由、大语言模型记忆基础设施，以及面向科学与规划的世界模型。目前正在印度理工学院马德拉斯分校攻读数据科学与应用学士学位。',
      "stat.1b": "大模型与 RAG",
      "stat.1s": "路由、记忆、智能体",
      "stat.2b": "世界模型",
      "stat.2s": "临床 + 组合优化",
      "stat.3b": "评估",
      "stat.3s": "SWE-bench 与评测框架",
      "stat.4b": "5",
      "stat.4s": "在投论文",
      "badge.current": "在职",
      "exp.medos.when": "2026年7月 – 至今",
      "exp.medos.role": "研究工程师",
      "exp.medos.org": "MedOS Tech · 阿布扎比，阿联酋",
      "exp.medos.b1":
        "构建 <strong>CTA-RAG</strong>：面向威胁情报的智能体检索系统，任务感知检索与路由（在 <strong>4,560</strong> 条基准样本上路由准确率 <strong>99.78%</strong>）。",
      "exp.medos.b2":
        "设计 <strong>LLM 记忆</strong> / 知识运维层；检索准确率由 <strong>0.55→0.99</strong>，存储记忆量减少 <strong>9×</strong>。",
      "exp.medos.b3":
        "构建可观测的 <strong>SWE-bench Verified</strong> 智能体评测框架，用于架构与失败模式分析。",
      "exp.cao.when": "2026 – 至今",
      "exp.cao.role": "研究合作者",
      "exp.cao.org": "与 Zhiguang Cao · 新加坡管理大学（SMU）",
      "exp.cao.b1":
        "开发 <strong>FAROS</strong>：面向动态路径规划的<strong>世界模型</strong>规划器，通过想象未来客户请求对路由与等待动作打分。",
      "exp.cao.b2":
        "构建带截止约束的动态 <strong>CVRP200</strong> 基准，含场景评估与等待/预言机强基线。",
      "exp.cao.b3":
        "相较最近派单缩短行程 <strong>21%</strong>（<strong>20.1 vs 25.5</strong>），并在全部 <strong>40</strong> 个测试日满足截止约束。",
      "exp.mbzuai.when": "2026年3月 – 2026年6月",
      "exp.mbzuai.role": "研究合作者",
      "exp.mbzuai.org": "与 Imran Razzak · 穆罕默德·本·扎耶德人工智能大学（MBZUAI）",
      "exp.mbzuai.b1":
        "构建证据驱动的临床试验<strong>世界模型</strong>（OpenFDA、PubMed、DrugBank），约 3.6k/1.2k 训练/评估转移样本。",
      "exp.mbzuai.b2":
        "开发 <strong>LLM 规则编译器</strong>，从药品说明书与文献中抽取 <strong>30+</strong> 类仿真参数。",
      "exp.mbzuai.b3":
        "相对 <strong>4</strong> 个基线做留出评估，配套 <strong>50+</strong> 自动化测试，实现可校准的治疗响应仿真。",
      "exp.milab.when": "2026年1月 – 2026年7月",
      "exp.milab.role": "机器学习实习生",
      "exp.milab.org": "印度理工学院马德拉斯分校 MI Lab",
      "exp.milab.b1":
        "<strong>TransChem</strong>（Shell）：分子表征 + MLP 预测离子液体分解温度；<strong>R² = 0.85</strong>（经典基线 0.81）。",
      "exp.milab.b2":
        "<strong>Archemist</strong>（Cooper Group）：通过自主物理执行与调度，将单次实验制备时间从约 40 小时降至 <strong>6–8</strong> 小时。",
      "exp.milab.b3":
        "扩展 Archemist 实验站，并加入基于 <strong>ROS</strong> 的机器人控制，实现闭环物理材料发现。",
      "exp.cifil.when": "2025年7月 – 2025年12月",
      "exp.cifil.role": "研究实习生",
      "exp.cifil.org": "印度理工学院马德拉斯分校 CIFIL Lab",
      "exp.cifil.b1":
        '构建并部署 <strong>GuruSetu</strong>（<a href="https://gurusetu.iitm.ac.in" rel="noopener">gurusetu.iitm.ac.in</a>）——含数据库、后端 API 与 React 前端的全栈系统。',
      "exp.quant.when": "2025年6月",
      "exp.quant.role": "量化开发",
      "exp.quant.org": "QuantHive · 印度理工学院马德拉斯分校研究园",
      "exp.quant.b1":
        "开发模块化<strong>事件驱动回测引擎</strong>，含行情、信号、订单与成交事件。",
      "exp.quant.b2":
        "使用 CUDA / Numba / CuPy GPU 内核，在 <strong>100 万+</strong> 数据点上实现 <strong>15×</strong> 加速。",
      "pub.1.t": "面向大语言模型维护的个人知识库运维层",
      "pub.1.a": "<strong>Shreya Kumari</strong>、Habib Baluwala、Bandar AlShammari",
      "pub.2.t": "SecondRead：通过重读视觉证据实现低成本多任务医学视觉语言生成",
      "pub.2.a": "Ashish Mehta、<strong>Shreya Kumari</strong>、Abhijit Das、Imran Razzak",
      "pub.3.t": "GEM：面向自我改进语言智能体的图演化元认知",
      "pub.3.a":
        "Abhijit Das、Ashish Mehta、Debasmita Biswas、<strong>Shreya Kumari</strong>、Nichula Sathmith Wasalathilaka、Behzad Bozorgtabar、Dwarikanath Mahapatra、Imran Razzak",
      "pub.4.t": "ViTA：面向自我演化智能体的视觉工具合成",
      "pub.4.a":
        "Abhijit Das、Debasmita Biswas、<strong>Shreya Kumari</strong>、Nichula Sathmith Wasalathilaka、Dwarikanath Mahapatra、Imran Razzak",
      "pub.5.t": "先路由再检索：面向网络威胁情报的契约约束与认知任务感知 RAG",
      "pub.5.a":
        "Muna Al-Hawawreh；<strong>Shreya Kumari</strong>；Muhammad Hammad；Ashish Mehta；Hirusha Adikari；Habib Baluwala；Bandar Alshammari",
      "proj.wm.t": "临床试验世界模型",
      "proj.wm.d":
        "基于 OpenFDA、PubMed 与 DrugBank 的证据驱动世界模型，用于治疗响应仿真——与 MBZUAI（Imran Razzak 教授）合作。",
      "proj.faros.t": "FAROS · 面向动态车辆路径的世界模型规划",
      "proj.faros.d":
        "面向动态 CVRP 的生成式<strong>世界模型</strong>；相较最近派单缩短行程 <strong>21%</strong>。与 <strong>Zhiguang Cao，SMU</strong> 合作。",
      "proj.guru.t": "GuruSetu",
      "proj.guru.d":
        "印度理工学院马德拉斯分校 CIFIL Lab 全栈平台——数据库、后端 API 与 React 前端。",
      "proj.council.t": "跨模型推理 · LLM 委员会",
      "proj.council.d":
        "三模型生成–批评–综合委员会（Groq、Ollama、Mistral），含一致性打分与置信度感知回退。",
      "proj.bt.t": "事件驱动回测引擎",
      "proj.bt.d":
        "模块化 Python 引擎，含行情/信号/订单/成交事件；CUDA/Numba/CuPy 内核在百万级数据上实现 <strong>15×</strong> 加速。",
      "tag.wm": "世界模型",
      "tag.clinical": "临床 AI",
      "tag.dvrp": "动态车辆路径",
      "tag.fullstack": "全栈",
      "tag.multiagent": "多智能体",
      "tag.eval": "评估",
      "tag.quant": "量化",
      "tag.tool": "工具调用",
      "tag.english": "英语（流利）",
      "edu.degree": "学历",
      "edu.detail":
        "<strong>数据科学与应用学士</strong><br>印度理工学院马德拉斯分校<br>2023 – 2026年9月 · GPA <strong>8.49/10</strong>",
      "edu.refs": "推荐人",
      "edu.ref1":
        '<strong>Abhijit Das</strong> — CTO，MedOS Tech<br><a href="mailto:abhijit.das@mbzuai.ac.ae">abhijit.das@mbzuai.ac.ae</a>',
      "edu.ref2":
        '<strong>Rohit Batra 教授</strong> — 印度理工学院马德拉斯分校 / WSAI<br><a href="mailto:rbatra@smail.iitm.ac.in">rbatra@smail.iitm.ac.in</a>',
      "skills.llm": "大模型与智能体",
      "skills.ml": "机器学习 / AI",
      "skills.sys": "系统",
      "skills.lang": "语言",
      "contact.blurb":
        "现居<strong>印度钦奈</strong> · 欢迎就医学人工智能、大语言模型、智能体系统与世界模型展开研究合作。",
      "contact.phone": "电话",
      "contact.email": "邮箱",
    },
  };

  function applyLang(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key] != null) el.innerHTML = pack[key];
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try {
      localStorage.setItem("site-lang", lang);
    } catch (_) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.title = theme === "dark" ? "Light mode" : "Dark mode";
    }
    try {
      localStorage.setItem("site-theme", theme);
    } catch (_) {}
  }

  const savedLang = (() => {
    try {
      return localStorage.getItem("site-lang");
    } catch (_) {
      return null;
    }
  })();
  applyLang(savedLang === "zh" ? "zh" : "en");

  const savedTheme = (() => {
    try {
      return localStorage.getItem("site-theme");
    } catch (_) {
      return null;
    }
  })();
  if (savedTheme === "light") applyTheme("light");
  else applyTheme("dark");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
})();
