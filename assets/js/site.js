(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const translations = {
    en: {
      siteTitle: `AGRI-EYE TRIO K | Geospatial Agricultural Decision Support`, siteDescription: `A hybrid geospatial agricultural decision-support platform combining satellite remote sensing, drone/GeoTIFF analysis, GIS indicators and reporting.`, galleryTitle: `Application Gallery | AGRI-EYE TRIO K`, galleryDescription: `Explore AGRI-EYE TRIO K screenshots, GIS mapping, crop-screening workflows and drone/GeoTIFF analysis.`, aboutTitle: `About the Project | AGRI-EYE TRIO K`, aboutDescription: `Meet Khaled Albakour and explore the idea, workflow and responsible use behind AGRI-EYE TRIO K, a hybrid geospatial agricultural decision-support platform.`,
      menuOpenAria: `Open navigation`, menuCloseAria: `Close navigation`, chooseLanguageAria: `Choose language`, previousCropsAria: `Previous crops`, nextCropsAria: `Next crops`, cropCardsAria: `Crop information cards`, contactWhatsAppLabel: `WhatsApp`, contactGitHubLabel: `GitHub · Projects`,
      loaderCaption: `FIELD INTELLIGENCE LOADING`, idxHeroScroll: `SCROLL TO EXPLORE <span>↓</span>`, galleryViewImage: `View image ↗`, galleryVideoChip: `MP4 · LANDSCAPE`,
      navPlatform: `Platform`, navAboutProject: `About Project`, navCapabilities: `Capabilities`, navCropInfo: `Crop Info`, navGallery: `Gallery`, navContact: `Contact <span>↗</span>`, navScreenshots: `Screenshots`, navMainPage: `← Main page`,
      idxPlatformKicker: `THE AGRI-EYE APPROACH <span>01 — PLATFORM</span>`,
      idxIntroHeading: `From pixels to <span class="text-gradient">field decisions.</span>`,
      idxIntroP1: `AGRI-EYE TRIO K is a hybrid agricultural monitoring platform designed to bring satellite data, drone imagery and GIS tools into one workflow. Review field conditions, compare indicators and identify areas that may deserve closer inspection.`,
      idxIntroP2: `It is a decision-support and screening tool. Satellite indicators and risk proxies help guide field verification; they do not replace laboratory testing, agronomic assessment or confirmed disease diagnosis.`,
      modeLabel1: `01 / ONLINE`, modeTitle1: `Satellite intelligence`, modeDesc1: `Use Google Earth Engine workflows to explore vegetation, moisture and environmental indicators across a selected field and date range.`, modeTags1: `<span>Sentinel-2</span><span>Sentinel-1</span><span>Climate data</span>`,
      modeLabel2: `02 / OFFLINE`, modeTitle2: `Drone &amp; local imagery`, modeDesc2: `Work with supported local raster imagery, inspect spatial variation and prepare candidate target zones for field follow-up.`, modeTags2: `<span>GeoTIFF</span><span>GIS layers</span><span>VRA export</span>`,
      modeLabel3: `03 / WORKFLOW`, modeTitle3: `Turn insight into action`, modeDesc3: `Explore map layers, KPIs and statistics, then export reports and geospatial files to support a documented field workflow.`, modeTags3: `<span>Maps</span><span>Reports</span><span>Target zones</span>`,
      idxCapKicker: `BUILT FOR FIELD WORK <span>02 — CAPABILITIES</span>`,
      idxCapHeading: `One workspace.<br><span class="text-gradient">Multiple layers of insight.</span>`,
      idxCapLead: `Bring mapping, crop screening and export tools together in a practical desktop workflow.`,
      capTitle1: `GIS field mapping`, capDesc1: `Draw or edit an area of interest, explore basemaps and review analysis layers with map context.`,
      capTitle2: `Vegetation &amp; moisture indicators`, capDesc2: `Review supported indices such as NDVI, NDRE, NDMI, NDWI and EVI2 where input data allows.`,
      capTitle3: `Crop-specific screening`, capDesc3: `Crop workflows surface candidate patterns and relative proxies for further investigation — not definitive diagnosis.`,
      capTitle4: `Drone target zones`, capDesc4: `Export candidate zones and geospatial packages to help plan high-resolution inspection and follow-up.`,
      capTitle5: `Reports &amp; GIS exports`, capDesc5: `Create PDF summaries and export supported formats including GeoJSON, KML/KMZ and Shapefile.`,
      capTitle6: `Hybrid workflow`, capDesc6: `Use online satellite analysis or supported offline drone/raster workflows, depending on the task and available data.`,
      comparisonKicker: `PROJECT POSITIONING <span>03 — OVERVIEW</span>`, comparisonOverline: `BUILT AROUND A HYBRID WORKFLOW`,
      comparisonHeading: `A focused view of <span class="text-gradient">the AGRI-EYE approach.</span>`,
      comparisonDesc: `An overview of how AGRI-EYE TRIO K brings crop-oriented screening, offline drone imagery, GIS and reporting into one workflow. This graphic is a high-level comparison, not a claim that any platform is best for every task.`,
      comparisonNote: `Capabilities vary by product version, available datasets and operating context. Results are screening outputs and should be verified in the field.`,
      comparisonCaption: `Project capability overview · select the image to enlarge`, openFullImage: `Open full image ↗`,
      idxCropKicker: `EXPLORE THE CROP MODULES <span>04 — CROP INFO</span>`,
      idxCropHeading: `Every crop has<br><span class="text-gradient">its own story.</span>`,
      idxCropLead: `Choose a card to learn what its screening workflow is designed to explore.`, idxCropNote: `Swipe horizontally or use the arrows to explore all modules.`,
      cropTypeWheat: `CEREAL`, cropNameWheat: `Wheat`, cropDescWheat: `Reviews vegetation vigor and canopy development through supported indices. Moisture-related indicators and spatial variation can help flag areas for field scouting; seasonal growth patterns may support relative production-potential assessment when data is suitable.`, cropPillsWheat: `<span>NDVI / NDRE</span><span>Water-stress proxy</span><span>Scout zones</span>`,
      cropTypeCorn: `CEREAL`, cropNameCorn: `Corn / Maize`, cropDescCorn: `Explores crop vigor, canopy variation and moisture-related patterns across the selected field. The map can help prioritize scouting for uneven growth or possible stress, while any yield-related interpretation remains an estimate rather than a measured harvest forecast.`, cropPillsCorn: `<span>Growth indices</span><span>Moisture proxy</span><span>Field variability</span>`,
      cropTypePotato: `TUBER CROP`, cropNamePotato: `Potato`, cropDescPotato: `Maps vegetation condition and within-field differences that may relate to crop development or water stress. Candidate zones can guide ground checks for uneven canopy, wet areas or other visible symptoms; satellite data alone cannot confirm a specific potato disease.`, cropPillsPotato: `<span>NDVI / NDRE</span><span>Water proxy</span><span>Target zones</span>`,
      cropTypeOlive: `ORCHARD`, cropNameOlive: `Olive`, cropDescOlive: `Separates vegetation-growth indicators from moisture-related indicators and screens for patterns that may warrant orchard inspection. Peacock spot and erosion outputs are candidate screenings only; mixed tree canopy, grass, soil and shadow can affect satellite pixels.`, cropPillsOlive: `<span>Growth index</span><span>Water-stress proxy</span><span>Peacock spot candidate</span>`,
      cropTypePeanut: `LEGUME`, cropNamePeanut: `Peanut / Groundnut`, cropDescPeanut: `Explores canopy growth, moisture patterns and candidate areas for follow-up. Late leaf spot and waterlogging screening, plus an aflatoxin-risk proxy, can help prioritize inspection but cannot confirm infection or measure aflatoxin content.`, cropPillsPeanut: `<span>Growth indices</span><span>Waterlogging candidate</span><span>Risk proxy</span>`,
      cropTypeSoil: `FIELD ASSESSMENT`, cropNameSoil: `Soil Analysis`, cropDescSoil: `Provides a dedicated soil-oriented analysis workflow using the supported online engine. Outputs depend on the available datasets and should be interpreted as screening information, not a substitute for laboratory soil sampling and testing.`, cropPillsSoil: `<span>Online engine</span><span>Spatial context</span><span>Soil follow-up</span>`,
      cropTypeUniversal: `MULTI-CROP`, cropNameUniversal: `Universal Engine`, cropDescUniversal: `A general workflow for supported online or offline datasets when a specialized crop module is not the right fit. It brings common mapping and indicator tools into a flexible analysis path, with results governed by input data quality.`, cropPillsUniversal: `<span>Online / Offline</span><span>Raster layers</span><span>GIS exports</span>`,
      idxVisualLabel: `OBSERVE · COMPARE · VERIFY`, idxVisualHeading: `Better visibility.<br><span class="text-gradient">More informed field checks.</span>`, idxVisualLink: `Explore application screenshots <span>↗</span>`,
      founderKicker: `PROJECT CREATOR <span>06 — FOUNDER</span>`, founderOverline: `FROM EARTH ENGINE SCRIPTS TO A HYBRID PLATFORM`,
      founderHeading: `Built with curiosity. <span class="text-gradient">Shaped by field problems.</span>`, founderName: `Khaled Albakour`, founderRole: `Geospatial Agricultural Decision-Support Platform · Creator`,
      founderDesc1: `AGRI-EYE TRIO K is a Geospatial Agricultural Decision-Support Platform combining GIS, satellite remote sensing, drone/GeoTIFF analysis, agricultural indicators and scientific screening workflows. It supports online Google Earth Engine analysis for wheat, potato and corn, alongside offline local-raster workflows for drone imagery. Depending on the selected module and available inputs, the workspace brings vegetation, moisture, climate, disease-favourability and relative-yield indicators into an interactive GIS workspace with professional reporting. Dedicated olive, peanut and soil-analysis modules, plus a universal workflow, are also available; outputs depend on the selected engine, dataset and processing mode.`,
      founderDesc2: `I developed this project to connect my practical agricultural experience with my growing skills in GIS, remote sensing, software development and data analysis.`,
      founderDesc3: `The work also highlighted the value of formal academic training in geospatial technologies, agricultural data science and software engineering—especially for validating remote-sensing models against field observations. Where validation is not established, outputs are presented as indicators, relative proxies or screening candidates, not as confirmed diagnoses.`, founderCaption: `Khaled Albakour · Project creator`,
      idxContactKicker: `LET'S CONNECT <span>07 — CONTACT</span>`, idxContactHeading: `Built around the<br><span class="text-gradient">real field.</span>`, idxContactLead: `For project information, professional collaboration or a technical discussion about AGRI-EYE TRIO K, get in touch.`,
      footerTagline: `Hybrid agricultural intelligence · Satellite + Drone · Online + Offline`, footerGalleryLink: `Application Gallery ↗`, footerMainLink: `← Return to main page`,
      creatorCredit: `Created by Khaled Albakour · Geospatial Specialist &amp; Web Developer`, creatorRights: `© <span class="year-value"></span> AGRI-EYE TRIO K. All rights reserved. Site content, copy, design and brand assets may not be reproduced or redistributed without prior written permission.`,
      backTopAria: `Back to top`, backTopTitle: `Back to top`, whatsAppAria: `Chat on WhatsApp`, whatsAppTitle: `WhatsApp`,
      
      idxAboutButton: `About the project <span>↗</span>`,
      aboutHeroLabel: `THE STORY BEHIND THE PLATFORM`,
      aboutHeroHeading: `From the field to <span class="text-gradient">geospatial intelligence.</span>`,
      aboutHeroLead: `AGRI-EYE TRIO K began with a simple question: how can satellite and drone data help us understand agricultural fields with more context, clarity and care?`,
      aboutScrollCue: `SCROLL TO MOVE THROUGH THE STORY <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — THE FOUNDER`,
      aboutFounderHeading: `A builder connecting agriculture and technology.`,
      aboutFounderText: `I’m Khaled Albakour, creator of AGRI-EYE TRIO K. My path brings practical agricultural interests together with self-directed learning in GIS, satellite remote sensing, software development and data analysis. This project is where those strands meet in a working platform.`,
      aboutOriginLabel: `02 — THE IDEA`,
      aboutOriginHeading: `A field is more than a picture.`,
      aboutOriginText1: `Satellite imagery offers a broad, repeatable view of crop patterns across time. Drone imagery and local GeoTIFF data can add a closer look at selected areas. GIS brings these views into their spatial context.`,
      aboutOriginText2: `The idea behind AGRI-EYE TRIO K is to bring these sources into one practical workspace, so a user can explore variation, compare indicators and decide where a closer field check may be useful.`,
      aboutMethodLabel: `03 — TWO WORKFLOWS`,
      aboutMethodHeading: `One platform. Two ways to work.`,
      aboutOnlineTitle: `ONLINE · Satellite workflows`,
      aboutOnlineText: `Supported Google Earth Engine workflows can explore satellite and environmental datasets for a selected crop, field boundary and date range.`,
      aboutOfflineTitle: `OFFLINE · Local imagery`,
      aboutOfflineText: `Supported local raster and drone imagery can be inspected without relying on a live satellite-processing session, subject to the selected module and available inputs.`,
      aboutWorkflowLabel: `04 — FROM DATA TO FIELD CHECKS`,
      aboutWorkflowHeading: `A clear path from analysis to action.`,
      aboutWorkflowText: `Choose a crop and field, set the analysis period, then review maps, indicators, KPIs and spatial differences. Where supported, the application can prepare candidate target zones and export reports or geospatial files for follow-up. The aim is to make each step easier to review and document.`,
      aboutScienceLabel: `05 — SCIENTIFIC RESPONSIBILITY`,
      aboutScienceHeading: `Useful signals, interpreted responsibly.`,
      aboutScienceText: `Remote-sensing indicators and risk proxies are signals for investigation, not automatic proof of a disease, nutrient level, water quantity or final yield. Results depend on data quality, timing, crop conditions and model assumptions. Field observations, agronomic expertise and appropriate testing remain essential for validation.`,
      aboutVisionLabel: `06 — CONTINUOUS DEVELOPMENT`,
      aboutVisionHeading: `Built iteratively. Improved through verification.`,
      aboutVisionText: `Version 1.0 established the original direction; later iterations have expanded the desktop workflow and crop modules. The next steps are careful testing, clearer documentation, validation against field observations and continued training in geospatial technology and agricultural data science.`,
      aboutClosingLabel: `THE PURPOSE`,
      aboutClosingHeading: `Technology should bring us closer to the field.`,
      aboutClosingText: `AGRI-EYE TRIO K is a developing project designed to connect geospatial data with practical field questions — one transparent, testable step at a time.`,
      aboutHomeButton: `Explore the main platform <span>↗</span>`,
      aboutGalleryButton: `View the application gallery <span>↗</span>`,
      galleryEyebrow: `<span class="live-dot"></span> INSIDE THE WORKSPACE`, galleryHeading: `Explore the<br><em>AGRI-EYE interface.</em>`, galleryLead: `Take a closer look at mapping, analysis layers and reporting tools connecting satellite screening with drone-based field workflows.`, galleryBrowseButton: `Browse screenshots ↓`,
      galleryVideoKicker: `PRODUCT WALKTHROUGH <span>01 — VIDEO</span>`, galleryVideoHeading: `See the workflow<br><span class="text-gradient">in motion.</span>`, galleryVideoLead: `A guided look at crop analysis, mapping and reporting in AGRI-EYE TRIO K.`, galleryVideoEmptyTitle: `AGRI-EYE TRIO K walkthrough`, galleryVideoEmptyPath: `A guided look at crop analysis, mapping and reporting.`, galleryVideoEmptyHint: `Use the controls to play, seek or view the video full screen.`, videoFullscreenLabel: `Full screen`, videoControlsAria: `Video controls`, videoProgressAria: `Video progress`,
      galleryShotsKicker: `THE DESKTOP APPLICATION <span>02 — SCREENSHOTS</span>`, galleryShotsHeading: `A closer look at<br><span class="text-gradient">the tools.</span>`, galleryShotsLead: `Landscape screenshots show examples of the application workspace and analysis views. Select any image to expand it.`,
      shot1Label: `01 / ANALYSIS WORKSPACE`, shot1Title: `Field analysis dashboard`, shot1Desc: `Map view, spatial indicators and summary metrics in one workspace.`,
      shot2Label: `02 / APPLICATION UI`, shot2Title: `Application workspace`, shot2Desc: `Crop selection and core analysis controls.`,
      shot3Label: `03 / GIS VIEW`, shot3Title: `Geospatial overview`, shot3Desc: `Explore the map-first approach to agricultural monitoring.`,
      shot4Label: `04 / SOIL MODULE`, shot4Title: `Soil analysis concept`, shot4Desc: `Soil-oriented screening within a broader field assessment.`,
      shot5Label: `05 / FIELD CONTEXT`, shot5Title: `Ground perspective`, shot5Desc: `Remote-sensing indicators work best alongside field observations.`,
      shot6Label: `06 / CROP MONITORING`, shot6Title: `Crop monitoring context`, shot6Desc: `Seasonal crop condition and field variability provide analysis context.`,
      galleryBackButton: `← Back to main page`, galleryCropButton: `Explore crop info ↗`, galleryCropKicker: `CROP MODULES <span>03 — EXPLORE MORE</span>`, galleryCropHeading: `Crop-specific insight,<br><span class="text-gradient">one platform.</span>`, galleryCropLead: `Explore how the platform organizes crop-oriented screening workflows.`,
      galleryMiniCrop1: `Wheat ↗`, galleryMiniCrop2: `Corn / Maize ↗`, galleryMiniCrop3: `Potato ↗`, galleryMiniCrop4: `Olive ↗`, galleryMiniCrop5: `Peanut ↗`
    },
    ar: {
      siteTitle: `AGRI-EYE TRIO K | منصة دعم القرار الزراعي الجغرافي المكاني`, siteDescription: `منصة هجينة لدعم القرار الزراعي الجغرافي المكاني تجمع الاستشعار عن بُعد بالأقمار الصناعية وتحليل صور الدرون وGeoTIFF ومؤشرات GIS والتقارير.`, galleryTitle: `معرض التطبيق | AGRI-EYE TRIO K`, galleryDescription: `استكشف لقطات AGRI-EYE TRIO K وخرائط GIS ومسارات فحص المحاصيل وتحليل بيانات الدرون وGeoTIFF.`, aboutTitle: `عن المشروع | AGRI-EYE TRIO K`, aboutDescription: `تعرّف إلى خالد البكور وفكرة منصة AGRI-EYE TRIO K وطريقة عملها وحدود استخدام نتائجها بوصفها منصة جغرافية مكانية هجينة لدعم القرارات الزراعية.`,
      menuOpenAria: `فتح قائمة التنقل`, menuCloseAria: `إغلاق قائمة التنقل`, chooseLanguageAria: `اختيار اللغة`, previousCropsAria: `المحاصيل السابقة`, nextCropsAria: `المحاصيل التالية`, cropCardsAria: `بطاقات معلومات المحاصيل`, contactWhatsAppLabel: `واتساب`, contactGitHubLabel: `GitHub · المشاريع`,
      loaderCaption: `جارٍ تجهيز منصة الرصد الزراعي`, idxHeroScroll: `انزل للاستكشاف <span>↓</span>`, galleryViewImage: `عرض الصورة ↗`, galleryVideoChip: `MP4 · فيديو أفقي`,
      navPlatform: `المنصة`, navAboutProject: `عن المشروع`, navCapabilities: `الإمكانات`, navCropInfo: `معلومات المحاصيل`, navGallery: `المعرض`, navContact: `تواصل معنا <span>↗</span>`, navScreenshots: `لقطات التطبيق`, navMainPage: `الصفحة الرئيسية ←`,
      idxPlatformKicker: `نهج AGRI-EYE <span>01 — المنصة</span>`,
      idxIntroHeading: `من البكسلات إلى <span class="text-gradient">قرارات الحقل.</span>`,
      idxIntroP1: `AGRI-EYE TRIO K منصة هجينة لمراقبة المحاصيل تجمع بيانات الأقمار الصناعية وصور الدرون وأدوات نظم المعلومات الجغرافية ضمن سير عمل واحد. تتيح مراجعة حالة الحقل ومقارنة المؤشرات وتحديد المناطق التي قد تحتاج إلى فحص أدق.`,
      idxIntroP2: `المنصة أداة لدعم القرار والفحص الأولي. تساعد مؤشرات الأقمار الصناعية ومؤشرات المخاطر النسبية على توجيه التحقق الميداني، لكنها لا تستبدل التحاليل المخبرية أو التقييم الزراعي أو التشخيص المؤكد للأمراض.`,
      modeLabel1: `01 / أونلاين`, modeTitle1: `ذكاء الأقمار الصناعية`, modeDesc1: `استخدم مسارات Google Earth Engine لاستعراض مؤشرات الغطاء النباتي والرطوبة والبيئة ضمن الحقل والفترة الزمنية المحددين.`, modeTags1: `<span>Sentinel-2</span><span>Sentinel-1</span><span>بيانات مناخية</span>`,
      modeLabel2: `02 / أوفلاين`, modeTitle2: `الدرون والبيانات المحلية`, modeDesc2: `تعامل مع ملفات الراستر المحلية المدعومة، وافحص التباين المكاني، وجهّز مناطق مستهدفة مرشحة للمتابعة الميدانية.`, modeTags2: `<span>GeoTIFF</span><span>طبقات GIS</span><span>تصدير VRA</span>`,
      modeLabel3: `03 / سير العمل`, modeTitle3: `من المؤشر إلى الإجراء`, modeDesc3: `استعرض طبقات الخريطة ومؤشرات KPI والإحصاءات، ثم صدّر التقارير والملفات الجغرافية لتوثيق خطوات العمل الميداني.`, modeTags3: `<span>خرائط</span><span>تقارير</span><span>مناطق مستهدفة</span>`,
      idxCapKicker: `مصممة للعمل الميداني <span>02 — الإمكانات</span>`,
      idxCapHeading: `مساحة عمل واحدة.<br><span class="text-gradient">طبقات متعددة من المعلومات.</span>`,
      idxCapLead: `اجمع الخرائط وفحص المحاصيل وأدوات التصدير ضمن سير عمل عملي على الكمبيوتر.`,
      capTitle1: `رسم الحقول بنظم GIS`, capDesc1: `ارسم منطقة الاهتمام أو حررها، واستعرض الخرائط الأساسية وطبقات التحليل ضمن سياق مكاني واضح.`,
      capTitle2: `مؤشرات الغطاء النباتي والرطوبة`, capDesc2: `استعرض المؤشرات المدعومة مثل NDVI وNDRE وNDMI وNDWI وEVI2 عندما تسمح البيانات المتاحة بذلك.`,
      capTitle3: `فحص مخصص لكل محصول`, capDesc3: `تُظهر مسارات المحاصيل أنماطًا مرشحة ومؤشرات نسبية لمزيد من التحقق، وليست تشخيصًا نهائيًا.`,
      capTitle4: `مناطق مستهدفة للدرون`, capDesc4: `صدّر المناطق المرشحة والحزم الجغرافية للمساعدة في التخطيط للفحص عالي الدقة والمتابعة.`,
      capTitle5: `التقارير وملفات GIS`, capDesc5: `أنشئ تقارير PDF وصدّر الصيغ المدعومة، بما فيها GeoJSON وKML/KMZ وShapefile.`,
      capTitle6: `سير عمل هجين`, capDesc6: `استخدم تحليل الأقمار الصناعية عبر الإنترنت أو مسارات الدرون والراستر المحلية المدعومة وفق المهمة والبيانات المتاحة.`,
      comparisonKicker: `موقع المشروع ضمن الأدوات <span>03 — نظرة عامة</span>`, comparisonOverline: `مصمم حول سير عمل هجين`,
      comparisonHeading: `نظرة مركزة على <span class="text-gradient">نهج AGRI-EYE.</span>`,
      comparisonDesc: `توضح الصورة كيف يجمع AGRI-EYE TRIO K فحص المحاصيل وصور الدرون دون اتصال وأدوات GIS والتقارير ضمن سير عمل واحد. هذه مقارنة عامة للنطاق، وليست ادعاءً بأن منصة واحدة هي الأفضل لكل مهمة.`,
      comparisonNote: `تختلف الإمكانات باختلاف إصدار المنتج ومجموعات البيانات وسياق الاستخدام. نتائج الفحص مؤشرات أولية ينبغي التحقق منها ميدانيًا.`,
      comparisonCaption: `نظرة عامة على إمكانات المشروع · اضغط على الصورة لتكبيرها`, openFullImage: `عرض الصورة بالحجم الكامل ↗`,
      idxCropKicker: `استكشف وحدات المحاصيل <span>04 — معلومات المحاصيل</span>`,
      idxCropHeading: `لكل محصول<br><span class="text-gradient">قصة مختلفة.</span>`,
      idxCropLead: `اختر بطاقة لمعرفة ما الذي صُمم مسار الفحص الخاص بالمحصول لاستكشافه.`, idxCropNote: `اسحب أفقيًا أو استخدم الأسهم لاستعراض جميع الوحدات.`,
      cropTypeWheat: `حبوب`, cropNameWheat: `القمح`, cropDescWheat: `يراجع قوة الغطاء النباتي وتطور المجموع الخضري عبر المؤشرات المدعومة. تساعد مؤشرات الرطوبة والتباين المكاني على تحديد مناطق تستحق الكشف الحقلي؛ وقد تدعم أنماط النمو الموسمية تقديرًا نسبيًا لإمكانات الإنتاج عند ملاءمة البيانات.`, cropPillsWheat: `<span>NDVI / NDRE</span><span>مؤشر إجهاد مائي</span><span>مناطق للكشف</span>`,
      cropTypeCorn: `حبوب`, cropNameCorn: `الذرة`, cropDescCorn: `يستكشف قوة النمو وتباين الغطاء النباتي والأنماط المرتبطة بالرطوبة داخل الحقل. تساعد الخريطة على ترتيب أولويات الكشف عن النمو غير المتجانس أو الإجهاد المحتمل، وأي تقدير للإنتاج يبقى تقديريًا لا توقعًا مؤكدًا للحصاد.`, cropPillsCorn: `<span>مؤشرات النمو</span><span>مؤشر رطوبة</span><span>تباين الحقل</span>`,
      cropTypePotato: `محصول درني`, cropNamePotato: `البطاطا`, cropDescPotato: `ترسم حالة الغطاء النباتي والفروق داخل الحقل التي قد ترتبط بالنمو أو الإجهاد المائي. تساعد المناطق المرشحة على توجيه الفحص الأرضي لملاحظة ضعف الغطاء أو البلل أو الأعراض الظاهرة؛ ولا تستطيع بيانات الأقمار وحدها تأكيد مرض محدد في البطاطا.`, cropPillsPotato: `<span>NDVI / NDRE</span><span>مؤشر الماء</span><span>مناطق مستهدفة</span>`,
      cropTypeOlive: `بساتين`, cropNameOlive: `الزيتون`, cropDescOlive: `يفصل مؤشرات نمو الغطاء النباتي عن مؤشرات الرطوبة، ويفحص أنماطًا قد تستدعي معاينة البستان. إن فحص عين الطاووس والتعرية هو فحص مرشح فقط؛ فقد تختلط الأشجار والأعشاب والتربة والظلال داخل بكسلات القمر الصناعي.`, cropPillsOlive: `<span>مؤشر النمو</span><span>مؤشر إجهاد مائي</span><span>اشتباه عين الطاووس</span>`,
      cropTypePeanut: `بقوليات`, cropNamePeanut: `الفستق السوداني`, cropDescPeanut: `يستكشف نمو الغطاء النباتي وأنماط الرطوبة والمناطق المرشحة للمتابعة. يساعد فحص تبقع الأوراق المتأخر والتغدق ومؤشر مخاطر الأفلاتوكسين على ترتيب أولويات المعاينة، لكنه لا يؤكد العدوى أو يقيس تركيز الأفلاتوكسين.`, cropPillsPeanut: `<span>مؤشرات النمو</span><span>اشتباه تغدق</span><span>مؤشر مخاطر</span>`,
      cropTypeSoil: `تقييم الحقل`, cropNameSoil: `تحليل التربة`, cropDescSoil: `يوفر مسارًا مخصصًا لتحليل التربة باستخدام المحرك المتصل المدعوم. تعتمد المخرجات على مجموعات البيانات المتاحة، ويجب تفسيرها كمعلومات فحص أولي لا بديلًا عن أخذ عينات التربة وفحصها مخبريًا.`, cropPillsSoil: `<span>محرك أونلاين</span><span>سياق مكاني</span><span>متابعة التربة</span>`,
      cropTypeUniversal: `متعدد المحاصيل`, cropNameUniversal: `المحرك الشامل`, cropDescUniversal: `مسار عام للبيانات المتصلة أو المحلية المدعومة عندما لا تكون الوحدة المتخصصة هي الخيار المناسب. يجمع أدوات الخرائط والمؤشرات المشتركة ضمن تحليل مرن تتحدد نتائجه بجودة البيانات المدخلة.`, cropPillsUniversal: `<span>أونلاين / أوفلاين</span><span>طبقات راستر</span><span>تصدير GIS</span>`,
      idxVisualLabel: `راقب · قارن · تحقّق`, idxVisualHeading: `رؤية أوضح.<br><span class="text-gradient">وفحص ميداني أكثر استنارة.</span>`, idxVisualLink: `استكشف لقطات التطبيق <span>↗</span>`,
      founderKicker: `مبتكر المشروع <span>06 — المؤسس</span>`, founderOverline: `من سكريبتات Earth Engine إلى منصة هجينة`,
      founderHeading: `بدأت الفكرة بالفضول. <span class="text-gradient">وصقلتها مشكلات الحقول.</span>`, founderName: `خالد البكور`, founderRole: `مطوّر منصة دعم القرار الزراعي الجغرافي المكاني`,
      founderDesc1: `AGRI-EYE TRIO K منصة دعم قرار زراعي جغرافي مكاني تجمع نظم المعلومات الجغرافية والاستشعار عن بُعد بالأقمار الصناعية وتحليل صور الدرون وملفات GeoTIFF والمؤشرات الزراعية ومسارات الفحص العلمي. تدعم تحليل القمح والبطاطا والذرة عبر Google Earth Engine عند الاتصال، إلى جانب مسارات محلية غير متصلة لتحليل بيانات الراستر الملتقطة بالدرون. وبحسب الوحدة والبيانات المتاحة، تجمع مساحة GIS التفاعلية مؤشرات الغطاء النباتي والرطوبة والمناخ وقابلية تهيؤ ظروف الأمراض والإنتاج النسبي، مع تقارير احترافية. كما تضم النسخة المكتبية وحدات للزيتون والفستق السوداني وتحليل التربة، إلى جانب المحرك الشامل؛ وتعتمد المخرجات على المحرك والبيانات ووضع المعالجة المحدد.`,
      founderDesc2: `طوّرت هذا المشروع لربط خبرتي العملية في المجال الزراعي بالمهارات التي أعمل على تطويرها في نظم المعلومات الجغرافية والاستشعار عن بُعد وتطوير البرمجيات وتحليل البيانات.`,
      founderDesc3: `أبرزت لي عملية التطوير أيضًا أهمية التأهيل الأكاديمي المنهجي في التقنيات الجغرافية المكانية وعلوم البيانات الزراعية وهندسة البرمجيات، ولا سيما التحقق من نماذج الاستشعار عن بُعد بمقارنتها بالملاحظات الحقلية. وعندما لا يتوفر تحقق كافٍ، تُعرض المخرجات كمؤشرات أو قيم نسبية أو نتائج فحص مرشحة، لا كتشخيص مؤكّد.`, founderCaption: `خالد البكور · مبتكر المشروع`,
      idxContactKicker: `لنتواصل <span>07 — التواصل</span>`, idxContactHeading: `صُمم انطلاقًا من<br><span class="text-gradient">واقع الحقل.</span>`, idxContactLead: `للاستفسار عن المشروع أو التعاون المهني أو مناقشة تقنية حول AGRI-EYE TRIO K، تواصل معنا.`,
      footerTagline: `ذكاء زراعي هجين · أقمار صناعية + درون · أونلاين + أوفلاين`, footerGalleryLink: `معرض التطبيق ↗`, footerMainLink: `العودة إلى الصفحة الرئيسية ←`,
      creatorCredit: `إعداد خالد البكور · اختصاصي معلومات جغرافية ومطوّر ويب`, creatorRights: `© <span class="year-value"></span> AGRI-EYE TRIO K. جميع الحقوق محفوظة. لا يجوز إعادة نشر محتوى الموقع أو نصوصه أو تصميمه أو أصول العلامة التجارية دون إذن كتابي مسبق.`,
      backTopAria: `العودة إلى الأعلى`, backTopTitle: `العودة إلى الأعلى`, whatsAppAria: `تواصل عبر واتساب`, whatsAppTitle: `واتساب`,
      
      idxAboutButton: `عن المشروع <span>↗</span>`,
      aboutHeroLabel: `الحكاية وراء المنصة`,
      aboutHeroHeading: `من الحقل إلى <span class="text-gradient">الذكاء الجغرافي المكاني.</span>`,
      aboutHeroLead: `بدأت فكرة AGRI-EYE TRIO K بسؤال بسيط: كيف يمكن لبيانات الأقمار الصناعية والدرون أن تساعدنا على فهم الحقول الزراعية بصورة أوسع وأوضح وأكثر دقة؟`,
      aboutScrollCue: `مرّر لأسفل للتقدّم في الحكاية <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — المؤسس`,
      aboutFounderHeading: `تطوير يجمع بين الزراعة والتقنية.`,
      aboutFounderText: `أنا خالد البكور، مطوّر مشروع AGRI-EYE TRIO K. يجمع مساري بين الاهتمام العملي بالزراعة والتعلّم الذاتي لنظم المعلومات الجغرافية والاستشعار عن بُعد وتطوير البرمجيات وتحليل البيانات. هذا المشروع هو المساحة التي التقت فيها هذه الاهتمامات ضمن منصة قابلة للاستخدام والتطوير.`,
      aboutOriginLabel: `02 — الفكرة`,
      aboutOriginHeading: `الحقل أكثر من مجرد صورة.`,
      aboutOriginText1: `تمنح صور الأقمار الصناعية رؤية واسعة ومتكررة لأنماط المحاصيل عبر الزمن، بينما تتيح صور الدرون وملفات GeoTIFF المحلية دراسة مناطق محددة بتفصيل أكبر. وتساعد نظم المعلومات الجغرافية على فهم هذه البيانات ضمن سياقها المكاني.`,
      aboutOriginText2: `تقوم فكرة AGRI-EYE TRIO K على جمع هذه المصادر ضمن مساحة عمل واحدة، بما يساعد المستخدم على استكشاف التباين ومقارنة المؤشرات وتحديد الأماكن التي قد تستحق فحصًا ميدانيًا أدق.`,
      aboutMethodLabel: `03 — طريقتا العمل`,
      aboutMethodHeading: `منصة واحدة. وطريقتان للعمل.`,
      aboutOnlineTitle: `ONLINE · تحليل الأقمار الصناعية`,
      aboutOnlineText: `تتيح مسارات Google Earth Engine المدعومة استكشاف بيانات الأقمار الصناعية والبيانات البيئية وفق المحصول وحدود الحقل والفترة الزمنية المحددة.`,
      aboutOfflineTitle: `OFFLINE · الصور والبيانات المحلية`,
      aboutOfflineText: `يمكن فحص ملفات الراستر المحلية وصور الدرون المدعومة دون الاعتماد على جلسة معالجة أقمار صناعية مباشرة، بحسب المحرك المختار والبيانات المتاحة.`,
      aboutWorkflowLabel: `04 — من البيانات إلى الفحص الميداني`,
      aboutWorkflowHeading: `خطوات واضحة من التحليل إلى الإجراء.`,
      aboutWorkflowText: `اختر المحصول والحقل وحدد الفترة الزمنية، ثم راجع الخرائط والمؤشرات ومؤشرات الأداء والفروق المكانية. وعندما تدعم الوحدة ذلك، يمكن تجهيز مناطق مرشحة للفحص وتصدير التقارير أو الملفات الجغرافية للمتابعة. الهدف هو جعل خطوات العمل أسهل في المراجعة والتوثيق.`,
      aboutScienceLabel: `05 — المسؤولية العلمية`,
      aboutScienceHeading: `مؤشرات مفيدة، وتفسير مسؤول.`,
      aboutScienceText: `المؤشرات المستشعرة عن بُعد ومؤشرات المخاطر النسبية إشارات تستحق الدراسة، وليست إثباتًا تلقائيًا لمرض أو مستوى مغذٍ أو كمية مياه أو إنتاج نهائي. تعتمد النتائج على جودة البيانات وتوقيتها وحالة المحصول وافتراضات النموذج. يظل التحقق ضروريًا بالملاحظات الحقلية والخبرة الزراعية والاختبارات المناسبة.`,
      aboutVisionLabel: `06 — التطوير المستمر`,
      aboutVisionHeading: `تطوير تدريجي يتحسن بالتحقق.`,
      aboutVisionText: `وضعت النسخة 1.0 الاتجاه الأول للمشروع، ثم وسّعت الإصدارات اللاحقة سير العمل المكتبي ووحدات المحاصيل. وتشمل الخطوات القادمة الاختبار الدقيق، وتوثيقًا أوضح، والتحقق من النتائج بالرجوع إلى الملاحظات الحقلية، ومواصلة التدريب في التقنيات الجغرافية المكانية وعلوم البيانات الزراعية.`,
      aboutClosingLabel: `الغاية`,
      aboutClosingHeading: `ينبغي للتقنية أن تقرّبنا من الحقل.`,
      aboutClosingText: `AGRI-EYE TRIO K مشروع قيد التطوير يهدف إلى ربط البيانات الجغرافية المكانية بالأسئلة العملية في الحقل، خطوةً واضحة قابلة للاختبار في كل مرة.`,
      aboutHomeButton: `استكشف المنصة الرئيسية <span>↗</span>`,
      aboutGalleryButton: `شاهد معرض التطبيق <span>↗</span>`,
      galleryEyebrow: `<span class="live-dot"></span> داخل مساحة العمل`, galleryHeading: `استكشف<br><em>واجهة AGRI-EYE.</em>`, galleryLead: `ألقِ نظرة أقرب على الخرائط وطبقات التحليل وأدوات التقارير التي تربط فحص الأقمار الصناعية بسير عمل الدرون الميداني.`, galleryBrowseButton: `استعراض لقطات الشاشة ↓`,
      galleryVideoKicker: `عرض توضيحي للمنتج <span>01 — الفيديو</span>`, galleryVideoHeading: `شاهد سير العمل<br><span class="text-gradient">أثناء التشغيل.</span>`, galleryVideoLead: `شاهد عرضًا يوضح تحليل المحاصيل والخرائط والتقارير في AGRI-EYE TRIO K.`, galleryVideoEmptyTitle: `عرض AGRI-EYE TRIO K`, galleryVideoEmptyPath: `جولة مرئية في تحليل المحاصيل والخرائط والتقارير.`, galleryVideoEmptyHint: `استخدم عناصر التحكم للتشغيل والتنقل أو عرض الفيديو بملء الشاشة.`, videoFullscreenLabel: `ملء الشاشة`, videoControlsAria: `عناصر تحكم الفيديو`, videoProgressAria: `موضع الفيديو`,
      galleryShotsKicker: `تطبيق الكمبيوتر <span>02 — لقطات الشاشة</span>`, galleryShotsHeading: `نظرة أقرب على<br><span class="text-gradient">الأدوات.</span>`, galleryShotsLead: `تعرض الصور الأفقية أمثلة على مساحة عمل التطبيق وواجهات التحليل. اضغط على أي صورة لتكبيرها.`,
      shot1Label: `01 / مساحة التحليل`, shot1Title: `لوحة تحليل الحقل`, shot1Desc: `الخريطة والمؤشرات المكانية والقياسات الملخصة ضمن مساحة عمل واحدة.`,
      shot2Label: `02 / واجهة التطبيق`, shot2Title: `مساحة عمل التطبيق`, shot2Desc: `اختيار المحصول وأدوات التحكم الأساسية في التحليل.`,
      shot3Label: `03 / عرض GIS`, shot3Title: `نظرة جغرافية مكانية`, shot3Desc: `استكشف نهج مراقبة الزراعة الذي تتمحور فيه الخريطة حول الحقل.`,
      shot4Label: `04 / وحدة التربة`, shot4Title: `مفهوم تحليل التربة`, shot4Desc: `فحص موجه للتربة ضمن تقييم أوسع للحقل.`,
      shot5Label: `05 / سياق الحقل`, shot5Title: `منظور أرضي`, shot5Desc: `تعمل مؤشرات الاستشعار عن بعد بصورة أفضل إلى جانب الملاحظات الحقلية.`,
      shot6Label: `06 / مراقبة المحاصيل`, shot6Title: `سياق مراقبة المحصول`, shot6Desc: `توفر حالة المحصول الموسمية والتباين المكاني سياقًا للتحليل.`,
      galleryBackButton: `العودة إلى الصفحة الرئيسية ←`, galleryCropButton: `استكشف معلومات المحاصيل ↗`, galleryCropKicker: `وحدات المحاصيل <span>03 — استكشف المزيد</span>`, galleryCropHeading: `معلومات خاصة بالمحصول،<br><span class="text-gradient">ضمن منصة واحدة.</span>`, galleryCropLead: `استكشف كيفية تنظيم المنصة لمسارات فحص المحاصيل.`,
      galleryMiniCrop1: `القمح ↗`, galleryMiniCrop2: `الذرة ↗`, galleryMiniCrop3: `البطاطا ↗`, galleryMiniCrop4: `الزيتون ↗`, galleryMiniCrop5: `الفستق السوداني ↗`
    },
    es: {
      siteTitle: `AGRI-EYE TRIO K | Apoyo geoespacial a decisiones agrícolas`, siteDescription: `Plataforma híbrida de apoyo geoespacial a decisiones agrícolas que combina teledetección satelital, análisis de drones/GeoTIFF, indicadores SIG e informes.`, galleryTitle: `Galería de la aplicación | AGRI-EYE TRIO K`, galleryDescription: `Explora capturas de AGRI-EYE TRIO K, cartografía SIG, flujos de evaluación de cultivos y análisis de drones/GeoTIFF.`, aboutTitle: `Sobre el proyecto | AGRI-EYE TRIO K`, aboutDescription: `Conoce a Khaled Albakour y descubre la idea, el flujo de trabajo y el uso responsable de AGRI-EYE TRIO K, una plataforma híbrida geoespacial de apoyo a decisiones agrícolas.`,
      menuOpenAria: `Abrir navegación`, menuCloseAria: `Cerrar navegación`, chooseLanguageAria: `Elegir idioma`, previousCropsAria: `Cultivos anteriores`, nextCropsAria: `Cultivos siguientes`, cropCardsAria: `Tarjetas de información de cultivos`, contactWhatsAppLabel: `WhatsApp`, contactGitHubLabel: `GitHub · Proyectos`,
      loaderCaption: `CARGANDO INTELIGENCIA AGRÍCOLA`, idxHeroScroll: `DESPLÁZATE PARA EXPLORAR <span>↓</span>`, galleryViewImage: `Ver imagen ↗`, galleryVideoChip: `MP4 · HORIZONTAL`,
      navPlatform: `Plataforma`, navAboutProject: `Sobre el proyecto`, navCapabilities: `Capacidades`, navCropInfo: `Cultivos`, navGallery: `Galería`, navContact: `Contacto <span>↗</span>`, navScreenshots: `Capturas`, navMainPage: `← Página principal`,
      idxPlatformKicker: `EL ENFOQUE AGRI-EYE <span>01 — PLATAFORMA</span>`,
      idxIntroHeading: `De los píxeles a las <span class="text-gradient">decisiones de campo.</span>`,
      idxIntroP1: `AGRI-EYE TRIO K es una plataforma híbrida de monitoreo agrícola que reúne datos satelitales, imágenes de drones y herramientas SIG en un mismo flujo de trabajo. Permite revisar las condiciones del campo, comparar indicadores e identificar zonas que podrían necesitar una inspección más detallada.`,
      idxIntroP2: `Es una herramienta de apoyo a la decisión y de evaluación preliminar. Los indicadores satelitales y los indicadores relativos de riesgo orientan la verificación en campo; no sustituyen los análisis de laboratorio, la evaluación agronómica ni un diagnóstico confirmado de enfermedades.`,
      modeLabel1: `01 / EN LÍNEA`, modeTitle1: `Inteligencia satelital`, modeDesc1: `Utiliza flujos de Google Earth Engine para explorar indicadores de vegetación, humedad y entorno en el campo y el periodo seleccionados.`, modeTags1: `<span>Sentinel-2</span><span>Sentinel-1</span><span>Datos climáticos</span>`,
      modeLabel2: `02 / SIN CONEXIÓN`, modeTitle2: `Drones e imágenes locales`, modeDesc2: `Trabaja con imágenes ráster locales compatibles, inspecciona la variación espacial y prepara zonas candidatas para el seguimiento en campo.`, modeTags2: `<span>GeoTIFF</span><span>Capas SIG</span><span>Exportación VRA</span>`,
      modeLabel3: `03 / FLUJO DE TRABAJO`, modeTitle3: `De la observación a la acción`, modeDesc3: `Explora capas de mapas, KPI y estadísticas, y exporta informes y archivos geoespaciales para documentar el trabajo de campo.`, modeTags3: `<span>Mapas</span><span>Informes</span><span>Zonas objetivo</span>`,
      idxCapKicker: `DISEÑADA PARA EL TRABAJO DE CAMPO <span>02 — CAPACIDADES</span>`,
      idxCapHeading: `Un espacio de trabajo.<br><span class="text-gradient">Múltiples capas de información.</span>`,
      idxCapLead: `Integra cartografía, evaluación de cultivos y herramientas de exportación en un flujo de trabajo de escritorio.`,
      capTitle1: `Cartografía SIG del campo`, capDesc1: `Dibuja o edita un área de interés, explora mapas base y revisa capas de análisis con contexto geográfico.`,
      capTitle2: `Indicadores de vegetación y humedad`, capDesc2: `Consulta índices compatibles como NDVI, NDRE, NDMI, NDWI y EVI2 cuando los datos de entrada lo permiten.`,
      capTitle3: `Evaluación específica por cultivo`, capDesc3: `Los flujos por cultivo muestran patrones candidatos e indicadores relativos para investigar; no constituyen un diagnóstico definitivo.`,
      capTitle4: `Zonas objetivo para drones`, capDesc4: `Exporta zonas candidatas y paquetes geoespaciales para planificar inspecciones de alta resolución y seguimiento.`,
      capTitle5: `Informes y exportaciones SIG`, capDesc5: `Genera resúmenes PDF y exporta formatos compatibles, incluidos GeoJSON, KML/KMZ y Shapefile.`,
      capTitle6: `Flujo de trabajo híbrido`, capDesc6: `Usa análisis satelital en línea o flujos locales compatibles de drones y ráster, según la tarea y los datos disponibles.`,
      comparisonKicker: `POSICIONAMIENTO DEL PROYECTO <span>03 — RESUMEN</span>`, comparisonOverline: `DISEÑADA EN TORNO A UN FLUJO HÍBRIDO`,
      comparisonHeading: `Una visión centrada en <span class="text-gradient">el enfoque AGRI-EYE.</span>`,
      comparisonDesc: `La imagen resume cómo AGRI-EYE TRIO K integra evaluación de cultivos, imágenes de drones sin conexión, SIG e informes en un mismo flujo de trabajo. Es una comparación general, no una afirmación de que una plataforma sea la mejor para todas las tareas.`,
      comparisonNote: `Las capacidades varían según la versión, los conjuntos de datos y el contexto de uso. Los resultados son indicadores preliminares que deben verificarse en campo.`,
      comparisonCaption: `Resumen de capacidades del proyecto · selecciona la imagen para ampliarla`, openFullImage: `Abrir imagen completa ↗`,
      idxCropKicker: `EXPLORA LOS MÓDULOS DE CULTIVO <span>04 — CULTIVOS</span>`,
      idxCropHeading: `Cada cultivo tiene<br><span class="text-gradient">su propia historia.</span>`,
      idxCropLead: `Selecciona una tarjeta para conocer qué analiza el flujo de evaluación de cada cultivo.`, idxCropNote: `Desliza horizontalmente o usa las flechas para explorar todos los módulos.`,
      cropTypeWheat: `CEREAL`, cropNameWheat: `Trigo`, cropDescWheat: `Evalúa el vigor de la vegetación y el desarrollo de la cubierta mediante índices compatibles. Los indicadores de humedad y la variación espacial ayudan a señalar zonas para inspección; los patrones estacionales pueden apoyar una estimación relativa del potencial productivo cuando los datos son adecuados.`, cropPillsWheat: `<span>NDVI / NDRE</span><span>Indicador hídrico</span><span>Zonas de inspección</span>`,
      cropTypeCorn: `CEREAL`, cropNameCorn: `Maíz`, cropDescCorn: `Explora el vigor, la variación de la cubierta y los patrones de humedad del campo. El mapa ayuda a priorizar inspecciones de crecimiento irregular o posible estrés; cualquier interpretación del rendimiento es una estimación, no una predicción confirmada de cosecha.`, cropPillsCorn: `<span>Índices de crecimiento</span><span>Indicador de humedad</span><span>Variabilidad</span>`,
      cropTypePotato: `TUBÉRCULO`, cropNamePotato: `Patata`, cropDescPotato: `Mapea el estado de la vegetación y las diferencias dentro del campo que podrían relacionarse con el desarrollo o el estrés hídrico. Las zonas candidatas orientan comprobaciones sobre cubierta irregular, exceso de humedad u otros síntomas; los datos satelitales por sí solos no confirman una enfermedad concreta.`, cropPillsPotato: `<span>NDVI / NDRE</span><span>Indicador de agua</span><span>Zonas objetivo</span>`,
      cropTypeOlive: `OLIVAR`, cropNameOlive: `Olivo`, cropDescOlive: `Separa los indicadores de crecimiento de los relacionados con la humedad y señala patrones que podrían requerir una inspección del olivar. El cribado de repilo y erosión es únicamente preliminar; copa, hierba, suelo y sombra pueden mezclarse en los píxeles satelitales.`, cropPillsOlive: `<span>Índice de crecimiento</span><span>Indicador hídrico</span><span>Posible repilo</span>`,
      cropTypePeanut: `LEGUMINOSA`, cropNamePeanut: `Cacahuete`, cropDescPeanut: `Explora el crecimiento de la cubierta, los patrones de humedad y zonas candidatas para seguimiento. El cribado de mancha tardía, encharcamiento y el indicador de riesgo de aflatoxinas ayudan a priorizar inspecciones, pero no confirman infección ni miden la aflatoxina.`, cropPillsPeanut: `<span>Índices de crecimiento</span><span>Posible encharcamiento</span><span>Indicador de riesgo</span>`,
      cropTypeSoil: `EVALUACIÓN DEL CAMPO`, cropNameSoil: `Análisis del suelo`, cropDescSoil: `Ofrece un flujo específico de análisis del suelo mediante el motor en línea compatible. Los resultados dependen de los conjuntos de datos disponibles y deben interpretarse como evaluación preliminar, no como sustituto del muestreo y las pruebas de laboratorio.`, cropPillsSoil: `<span>Motor en línea</span><span>Contexto espacial</span><span>Seguimiento del suelo</span>`,
      cropTypeUniversal: `MULTICULTIVO`, cropNameUniversal: `Motor universal`, cropDescUniversal: `Un flujo general para conjuntos de datos en línea o locales compatibles cuando un módulo especializado no es adecuado. Reúne herramientas comunes de cartografía e indicadores; los resultados dependen de la calidad de los datos de entrada.`, cropPillsUniversal: `<span>En línea / sin conexión</span><span>Capas ráster</span><span>Exportaciones SIG</span>`,
      idxVisualLabel: `OBSERVAR · COMPARAR · VERIFICAR`, idxVisualHeading: `Más visibilidad.<br><span class="text-gradient">Mejores inspecciones de campo.</span>`, idxVisualLink: `Explorar capturas de la aplicación <span>↗</span>`,
      founderKicker: `CREADOR DEL PROYECTO <span>06 — FUNDADOR</span>`, founderOverline: `DE SCRIPTS DE EARTH ENGINE A UNA PLATAFORMA HÍBRIDA`,
      founderHeading: `Nació de la curiosidad. <span class="text-gradient">Se moldeó con retos del campo.</span>`, founderName: `Khaled Albakour`, founderRole: `Desarrollador de una plataforma geoespacial de apoyo a decisiones agrícolas`,
      founderDesc1: `AGRI-EYE TRIO K es una plataforma geoespacial de apoyo a la toma de decisiones agrícolas que integra SIG, teledetección satelital, análisis de imágenes de drones y archivos GeoTIFF, indicadores agrícolas y flujos de evaluación científica. Permite analizar trigo, patata y maíz mediante Google Earth Engine en línea, junto con flujos sin conexión para rásteres locales procedentes de drones. Según el módulo seleccionado y los datos disponibles, reúne indicadores de vegetación, humedad, clima, condiciones favorables para enfermedades y rendimiento relativo en un entorno SIG interactivo con informes profesionales. La edición de escritorio también incluye módulos para olivo, cacahuete y análisis del suelo, además de un motor universal; los resultados dependen del motor, los datos y el modo de procesamiento seleccionados.`,
      founderDesc2: `Desarrollé este proyecto para conectar mi experiencia práctica en agricultura con mis conocimientos en SIG, teledetección, desarrollo de software y análisis de datos.`,
      founderDesc3: `El proceso también me mostró la importancia de una formación académica formal en tecnologías geoespaciales, ciencia de datos agrícolas e ingeniería de software, especialmente para validar modelos de teledetección frente a observaciones de campo. Cuando no existe validación suficiente, los resultados se presentan como indicadores, proxies relativos o zonas candidatas para inspección, no como diagnósticos confirmados.`, founderCaption: `Khaled Albakour · Creador del proyecto`,
      idxContactKicker: `CONECTEMOS <span>07 — CONTACTO</span>`, idxContactHeading: `Diseñada en torno al<br><span class="text-gradient">campo real.</span>`, idxContactLead: `Para solicitar información, explorar una colaboración profesional o conversar sobre aspectos técnicos de AGRI-EYE TRIO K, ponte en contacto.`,
      footerTagline: `Inteligencia agrícola híbrida · Satélite + Dron · En línea + Sin conexión`, footerGalleryLink: `Galería de la aplicación ↗`, footerMainLink: `← Volver a la página principal`,
      creatorCredit: `Creado por Khaled Albakour · Especialista geoespacial y desarrollador web`, creatorRights: `© <span class="year-value"></span> AGRI-EYE TRIO K. Todos los derechos reservados. El contenido, los textos, el diseño y los recursos de marca no pueden reproducirse ni redistribuirse sin autorización previa por escrito.`,
      backTopAria: `Volver arriba`, backTopTitle: `Volver arriba`, whatsAppAria: `Contactar por WhatsApp`, whatsAppTitle: `WhatsApp`,
      
      idxAboutButton: `Sobre el proyecto <span>↗</span>`,
      aboutHeroLabel: `LA HISTORIA DETRÁS DE LA PLATAFORMA`,
      aboutHeroHeading: `Del campo a la <span class="text-gradient">inteligencia geoespacial.</span>`,
      aboutHeroLead: `AGRI-EYE TRIO K comenzó con una pregunta sencilla: ¿cómo pueden los datos satelitales y de drones ayudarnos a comprender los campos agrícolas con más contexto, claridad y cuidado?`,
      aboutScrollCue: `DESPLÁZATE PARA RECORRER LA HISTORIA <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — EL FUNDADOR`,
      aboutFounderHeading: `Un creador que conecta agricultura y tecnología.`,
      aboutFounderText: `Soy Khaled Albakour, creador de AGRI-EYE TRIO K. Mi trayectoria combina el interés práctico por la agricultura con el aprendizaje autodidacta de SIG, teledetección satelital, desarrollo de software y análisis de datos. Este proyecto reúne esas áreas en una plataforma funcional.`,
      aboutOriginLabel: `02 — LA IDEA`,
      aboutOriginHeading: `Un campo es más que una imagen.`,
      aboutOriginText1: `Las imágenes satelitales ofrecen una visión amplia y repetible de los patrones del cultivo a lo largo del tiempo. Las imágenes de drones y los datos GeoTIFF locales permiten examinar áreas concretas con más detalle. Los SIG sitúan esas observaciones en su contexto espacial.`,
      aboutOriginText2: `AGRI-EYE TRIO K busca reunir estas fuentes en un espacio de trabajo práctico para explorar variaciones, comparar indicadores e identificar zonas donde una inspección de campo más detallada podría resultar útil.`,
      aboutMethodLabel: `03 — DOS FLUJOS DE TRABAJO`,
      aboutMethodHeading: `Una plataforma. Dos formas de trabajar.`,
      aboutOnlineTitle: `ONLINE · Flujos satelitales`,
      aboutOnlineText: `Los flujos compatibles de Google Earth Engine permiten explorar conjuntos de datos satelitales y ambientales según el cultivo, los límites del campo y el periodo seleccionados.`,
      aboutOfflineTitle: `OFFLINE · Imágenes locales`,
      aboutOfflineText: `Las imágenes ráster locales y los datos de drones compatibles se pueden revisar sin depender de una sesión activa de procesamiento satelital, según el módulo y los datos disponibles.`,
      aboutWorkflowLabel: `04 — DE LOS DATOS A LA INSPECCIÓN`,
      aboutWorkflowHeading: `Un camino claro del análisis a la acción.`,
      aboutWorkflowText: `Selecciona el cultivo y el campo, define el periodo de análisis y revisa mapas, indicadores, KPI y diferencias espaciales. Cuando el módulo lo permite, la aplicación prepara zonas candidatas para inspección y exporta informes o archivos geoespaciales para seguimiento. El objetivo es facilitar la revisión y documentación de cada paso.`,
      aboutScienceLabel: `05 — RESPONSABILIDAD CIENTÍFICA`,
      aboutScienceHeading: `Señales útiles, interpretadas con responsabilidad.`,
      aboutScienceText: `Los indicadores de teledetección y los proxies de riesgo son señales para investigar, no pruebas automáticas de una enfermedad, un nivel de nutrientes, una cantidad de agua o un rendimiento final. Los resultados dependen de la calidad y fecha de los datos, las condiciones del cultivo y los supuestos del modelo. La validación requiere observaciones de campo, criterio agronómico y pruebas adecuadas.`,
      aboutVisionLabel: `06 — DESARROLLO CONTINUO`,
      aboutVisionHeading: `Construido por etapas y mejorado mediante verificación.`,
      aboutVisionText: `La versión 1.0 estableció la dirección inicial; las iteraciones posteriores ampliaron el flujo de trabajo de escritorio y los módulos de cultivo. Los siguientes pasos incluyen pruebas cuidadosas, documentación más clara, validación con observaciones de campo y formación continua en tecnología geoespacial y ciencia de datos agrícolas.`,
      aboutClosingLabel: `EL PROPÓSITO`,
      aboutClosingHeading: `La tecnología debería acercarnos al campo.`,
      aboutClosingText: `AGRI-EYE TRIO K es un proyecto en desarrollo que conecta los datos geoespaciales con preguntas prácticas del campo, un paso transparente y verificable a la vez.`,
      aboutHomeButton: `Explorar la plataforma principal <span>↗</span>`,
      aboutGalleryButton: `Ver la galería de la aplicación <span>↗</span>`,
      galleryEyebrow: `<span class="live-dot"></span> DENTRO DEL ESPACIO DE TRABAJO`, galleryHeading: `Explora la<br><em>interfaz AGRI-EYE.</em>`, galleryLead: `Descubre las herramientas de cartografía, capas de análisis e informes que conectan la evaluación satelital con los flujos de trabajo de drones.`, galleryBrowseButton: `Ver capturas ↓`,
      galleryVideoKicker: `DEMOSTRACIÓN DEL PRODUCTO <span>01 — VÍDEO</span>`, galleryVideoHeading: `Mira el flujo de trabajo<br><span class="text-gradient">en acción.</span>`, galleryVideoLead: `Una visita guiada por el análisis de cultivos, la cartografía y los informes de AGRI-EYE TRIO K.`, galleryVideoEmptyTitle: `Recorrido por AGRI-EYE TRIO K`, galleryVideoEmptyPath: `Una vista guiada del análisis, los mapas y los informes.`, galleryVideoEmptyHint: `Usa los controles para reproducir, avanzar o ver el vídeo a pantalla completa.`, videoFullscreenLabel: `Pantalla completa`, videoControlsAria: `Controles de vídeo`, videoProgressAria: `Progreso del vídeo`,
      galleryShotsKicker: `APLICACIÓN DE ESCRITORIO <span>02 — CAPTURAS</span>`, galleryShotsHeading: `Una mirada más cercana a<br><span class="text-gradient">las herramientas.</span>`, galleryShotsLead: `Las capturas horizontales muestran el espacio de trabajo y las vistas de análisis. Selecciona una imagen para ampliarla.`,
      shot1Label: `01 / ESPACIO DE ANÁLISIS`, shot1Title: `Panel de análisis del campo`, shot1Desc: `Mapa, indicadores espaciales y métricas resumidas en un mismo espacio.`,
      shot2Label: `02 / INTERFAZ`, shot2Title: `Espacio de la aplicación`, shot2Desc: `Selección del cultivo y controles principales del análisis.`,
      shot3Label: `03 / VISTA SIG`, shot3Title: `Vista geoespacial`, shot3Desc: `Explora el enfoque cartográfico para el seguimiento agrícola.`,
      shot4Label: `04 / MÓDULO DE SUELO`, shot4Title: `Concepto de análisis del suelo`, shot4Desc: `Evaluación del suelo dentro de una valoración más amplia del campo.`,
      shot5Label: `05 / CONTEXTO DE CAMPO`, shot5Title: `Perspectiva desde tierra`, shot5Desc: `Los indicadores de teledetección funcionan mejor junto con observaciones de campo.`,
      shot6Label: `06 / SEGUIMIENTO DEL CULTIVO`, shot6Title: `Contexto de monitoreo`, shot6Desc: `El estado estacional del cultivo y la variabilidad aportan contexto al análisis.`,
      galleryBackButton: `← Volver a la página principal`, galleryCropButton: `Explorar información de cultivos ↗`, galleryCropKicker: `MÓDULOS DE CULTIVO <span>03 — MÁS INFORMACIÓN</span>`, galleryCropHeading: `Información específica del cultivo,<br><span class="text-gradient">en una sola plataforma.</span>`, galleryCropLead: `Explora cómo la plataforma organiza los flujos de evaluación por cultivo.`,
      galleryMiniCrop1: `Trigo ↗`, galleryMiniCrop2: `Maíz ↗`, galleryMiniCrop3: `Patata ↗`, galleryMiniCrop4: `Olivo ↗`, galleryMiniCrop5: `Cacahuete ↗`
    }
  };

  const extendedTranslations = {
    en: {
      heroEyebrow: `HYBRID AGRICULTURAL INTELLIGENCE`,
      heroHeading: `See the field.<br><em>Understand what it needs.</em>`,
      heroCopy: `One connected workflow for satellite-based crop screening, drone imagery and practical geospatial insight — online and offline.`,
      heroExplore: `Explore the platform <span>↓</span>`, heroGallery: `View app gallery <span>↗</span>`,
      modalCreatorName: `Created by Khaled Albakour`, modalCreatorRole: `Geospatial Specialist &amp; Web Developer`,
      creatorRights: `© 2024–2026 AGRI-EYE TRIO K. All rights reserved. Site content, copy, design and brand assets may not be reproduced or redistributed without prior written permission.`,
      aboutHeroLabel: `THE STORY BEHIND THE PLATFORM`,
      aboutHeroHeading: `A self-taught journey into <span class="text-gradient">geospatial agriculture.</span>`,
      aboutHeroLead: `AGRI-EYE TRIO K grew from agricultural scripts into a hybrid desktop platform linking satellite analysis, GIS and targeted drone workflows, with a focus on practical use where farm connectivity is limited.`,
      aboutScrollCue: `SCROLL TO MOVE THROUGH THE STORY <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — THE FOUNDER`,
      aboutFounderHeading: `Learning through disruption. Building through persistence.`,
      aboutFounderText: `I’m Khaled Albakour, a Syrian developer and creator of AGRI-EYE TRIO K. My formal education is a scientific secondary-school certificate from 2011; I do not hold a university degree. As the war disrupted access to university areas and formal study, I continued learning independently at home, starting with computer maintenance and programming fundamentals and then studying environmental science, geography and university-level scientific books.`,
      aboutOriginLabel: `02 — THE LEARNING PATH`,
      aboutOriginHeading: `From computer repair to geospatial analysis.`,
      aboutOriginText1: `<strong>2020:</strong> I began focused self-study in programming, computer maintenance, environmental science and geography. <strong>2022:</strong> I started learning GIS and spatial data workflows.`,
      aboutOriginText2: `<strong>2023–2024:</strong> I wrote and refined agricultural scripts, studied Google Earth Engine and satellite remote sensing, and began shaping the GeoAI concept and the AGRI-EYE website and hybrid project in 2024.`,
      aboutMethodLabel: `03 — ONLINE + OFFLINE`,
      aboutMethodHeading: `One platform. Two complementary workflows.`,
      aboutOnlineTitle: `ONLINE · Satellite screening`,
      aboutOnlineText: `Supported Google Earth Engine workflows review satellite and environmental datasets for a selected crop, field boundary and time period, helping identify candidate low-vigor or water-stress areas.`,
      aboutOfflineTitle: `OFFLINE · Local drone imagery`,
      aboutOfflineText: `Local drone imagery and GeoTIFF layers can be reviewed without a live satellite-processing session, which is useful in farms with weak or unavailable internet. Selected areas can receive closer follow-up.`,
      aboutWorkflowLabel: `04 — TARGETED DRONE SCOUTING`,
      aboutWorkflowHeading: `From satellite screening to focused field inspection.`,
      aboutWorkflowText: `The intended workflow is to run an online field analysis, identify candidate zones of weak growth or water stress, prepare a supported drone mission package, and then use Offline mode for closer inspection of those locations. Targeting selected parts of a field may reduce unnecessary full-farm flights and battery use; actual savings depend on the field, mission settings, equipment and validation. Drone mission planning and compatibility checks are still being refined.`,
      aboutScienceLabel: `05 — REPORTS, EXPORTS & SCIENTIFIC CARE`,
      aboutScienceHeading: `Professional outputs, interpreted responsibly.`,
      aboutScienceText: `AGRI-EYE TRIO K supports professional reports in four languages and geospatial exports including KML and KMZ, plus supported VRA and field-data formats for compatible tractors and precision-agriculture workflows. Exact formats depend on the selected module, export settings and equipment compatibility. Remote-sensing indicators and risk proxies are screening signals, not proof of disease, a direct measurement of water quantity or a confirmed yield prediction; field observations and suitable testing remain essential.`,
      aboutVisionLabel: `06 — DEVELOPMENT TIMELINE`,
      aboutVisionHeading: `From a desktop application to broader field workflows.`,
      aboutVisionText: `<strong>2024:</strong> I shaped the GeoAI concept and the hybrid project direction. <strong>2025:</strong> AGRI-EYE TRIO K V1.0 took shape as a Windows desktop application. <strong>2026:</strong> development expanded crop modules, language support and professional reporting. New scientific engines are being adapted for different crops and regions; the drone-mission workflow is still being developed and tested. Android and iPhone versions are planned and remain works in progress until released.`,
      aboutClosingLabel: `THE PURPOSE`,
      aboutClosingHeading: `Built for farmers, especially where connectivity is limited.`,
      aboutClosingText: `My goal is to help farmers make better-informed monitoring decisions, reduce avoidable water and fertilizer waste, support better crop performance, prioritize timely field checks and investigate possible pest or disease pressure sooner. The long-term vision is an agricultural monitoring service with weekly and monthly satellite/drone reports and clear subscription plans. I welcome relevant employment opportunities and serious partnerships with investors or agricultural professionals to develop and commercialize the platform.`,
      aboutHomeButton: `Explore the main platform <span>↗</span>`, aboutGalleryButton: `View the application gallery <span>↗</span>`
    },
    ar: {
      heroEyebrow: `منصة ذكاء زراعي هجينة`,
      heroHeading: `افهم الحقل.<br><em>واكتشف ما قد يحتاج إليه.</em>`,
      heroCopy: `مسار عمل متكامل لفحص المحاصيل ببيانات الأقمار الصناعية وصور الدرون والتحليل الجغرافي المكاني، عبر الإنترنت أو بدونه.`,
      heroExplore: `استكشف المنصة <span>↓</span>`, heroGallery: `عرض معرض التطبيق <span>↗</span>`,
      modalCreatorName: `إعداد خالد البكور`, modalCreatorRole: `اختصاصي معلومات جغرافية ومطوّر ويب`,
      creatorRights: `© 2024–2026 AGRI-EYE TRIO K. جميع الحقوق محفوظة. لا يجوز إعادة نشر محتوى الموقع أو نصوصه أو تصميمه أو أصول العلامة التجارية دون إذن كتابي مسبق.`,
      aboutHeroLabel: `الحكاية وراء المنصة`,
      aboutHeroHeading: `رحلة تعلم ذاتي نحو <span class="text-gradient">الزراعة الجغرافية المكانية.</span>`,
      aboutHeroLead: `تطورت AGRI-EYE TRIO K من سكريبتات زراعية إلى منصة مكتبية هجينة تربط تحليل الأقمار الصناعية بنظم المعلومات الجغرافية ومسارات الدرون الموجهة، مع التركيز على الاستخدام العملي في المزارع ذات الاتصال الضعيف بالإنترنت.`,
      aboutScrollCue: `مرّر للأسفل لمتابعة القصة <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — المؤسس`,
      aboutFounderHeading: `تعلم وسط الظروف الصعبة، وبناء بإصرار.`,
      aboutFounderText: `أنا خالد البكور، مطور سوري ومؤسس مشروع AGRI-EYE TRIO K. أحمل شهادة الثانوية العامة الفرع العلمي لعام 2011، ولا أحمل شهادة جامعية. وبسبب الحرب في سوريا وصعوبة الوصول إلى مناطق الجامعات ومتابعة الدراسة النظامية، واصلت التعلم ذاتيًا في المنزل؛ بدأت بصيانة الحاسوب وأساسيات البرمجة، ثم درست علوم البيئة والجغرافيا وقرأت كتبًا جامعية وعلمية.`,
      aboutOriginLabel: `02 — مسار التعلم`,
      aboutOriginHeading: `من صيانة الحاسوب إلى التحليل الجغرافي المكاني.`,
      aboutOriginText1: `<strong>2020:</strong> بدأت الدراسة الذاتية بصورة مركزة في البرمجة وصيانة الحاسوب وعلوم البيئة والجغرافيا. <strong>2022:</strong> بدأت تعلم نظم المعلومات الجغرافية GIS ومسارات البيانات المكانية.`,
      aboutOriginText2: `<strong>2023–2024:</strong> كتبت وطورت سكريبتات زراعية، وتعلمت Google Earth Engine والاستشعار عن بُعد والمرئيات الفضائية. وفي عام 2024 بدأت صياغة فكرة GeoAI والعمل على موقع AGRI-EYE والمشروع الزراعي الهجين.`,
      aboutMethodLabel: `03 — عبر الإنترنت وبدونه`,
      aboutMethodHeading: `منصة واحدة ومساران متكاملان للعمل.`,
      aboutOnlineTitle: `ONLINE · فحص بالمرئيات الفضائية`,
      aboutOnlineText: `تستخدم مسارات Google Earth Engine المدعومة بيانات الأقمار الصناعية والبيانات البيئية للمحصول وحدود الحقل والفترة الزمنية المختارة، للمساعدة في تحديد المناطق المرشحة لضعف النمو أو الإجهاد المائي.`,
      aboutOfflineTitle: `OFFLINE · صور الدرون المحلية`,
      aboutOfflineText: `يمكن مراجعة صور الدرون المحلية وطبقات GeoTIFF دون جلسة معالجة فضائية مباشرة، وهو ما يفيد في المزارع ذات الإنترنت الضعيف أو المنقطع. ويمكن التركيز لاحقًا على مناطق محددة لفحصها بمزيد من التفصيل.`,
      aboutWorkflowLabel: `04 — فحص موجّه بالدرون`,
      aboutWorkflowHeading: `من فحص الأقمار الصناعية إلى معاينة ميدانية مركزة.`,
      aboutWorkflowText: `تقوم الفكرة على إجراء تحليل Online للحقل، وتحديد المناطق المرشحة لضعف النمو أو الإجهاد المائي، ثم إعداد حزمة مهمة درون مدعومة والانتقال إلى Offline لفحص تلك المواقع عن قرب. قد يقلل توجيه المهمة إلى أجزاء محددة من الحاجة إلى تصوير المزرعة كاملة ويوفر وقت الطيران والبطارية؛ وتعتمد الوفورات الفعلية على الحقل وإعدادات المهمة والمعدات والتحقق. لا يزال تخطيط مهام الدرون والتحقق من التوافق قيد التطوير.`,
      aboutScienceLabel: `05 — التقارير والتصدير والمسؤولية العلمية`,
      aboutScienceHeading: `مخرجات احترافية تُفسَّر بمسؤولية.`,
      aboutScienceText: `تدعم AGRI-EYE TRIO K إنشاء تقارير احترافية بأربع لغات وتصدير ملفات جغرافية تشمل KML وKMZ، إضافةً إلى صيغ VRA وبيانات حقلية مدعومة للجرارات المتوافقة ومسارات الزراعة الدقيقة. تعتمد الصيغ على الوحدة المستخدمة وإعدادات التصدير وتوافق المعدات. مؤشرات الاستشعار عن بُعد ومؤشرات المخاطر أدوات فحص أولي وليست إثباتًا للمرض أو قياسًا مباشرًا لكمية المياه أو توقعًا مؤكدًا للإنتاج؛ وتبقى الملاحظات الحقلية والاختبارات المناسبة ضرورية.`,
      aboutVisionLabel: `06 — الجدول الزمني للتطوير`,
      aboutVisionHeading: `من تطبيق مكتبي إلى مسارات عمل ميدانية أوسع.`,
      aboutVisionText: `<strong>2024:</strong> بلورت فكرة GeoAI واتجاه المشروع الزراعي الهجين. <strong>2025:</strong> تبلورت AGRI-EYE TRIO K V1.0 كتطبيق مكتبي لنظام Windows. <strong>2026:</strong> توسعت وحدات المحاصيل ودعم اللغات والتقارير الاحترافية. يجري تكييف محركات علمية جديدة لمحاصيل ومناطق مختلفة، بينما ما زال مسار مهام الدرون قيد التطوير والاختبار. نسختا Android وiPhone ضمن خطط التطوير، ويجب اعتبارهما قيد العمل إلى حين الإصدار.`,
      aboutClosingLabel: `الهدف`,
      aboutClosingHeading: `منصة تخدم المزارعين، خصوصًا حيث يضعف الاتصال.`,
      aboutClosingText: `هدفي مساعدة المزارعين على اتخاذ قرارات مراقبة أفضل، وتقليل هدر المياه والأسمدة قدر الإمكان، ودعم أداء أفضل للمحصول، وتحديد المناطق التي تحتاج إلى فحص ميداني في الوقت المناسب، والتحري المبكر عن مؤشرات محتملة للآفات أو الأمراض. وتتمثل الرؤية طويلة الأمد في تقديم خدمة مراقبة زراعية بتقارير أسبوعية وشهرية اعتمادًا على الأقمار الصناعية والدرون وخطط اشتراك واضحة. أرحب بفرص العمل المناسبة وبالشراكات الجادة مع المستثمرين أو المختصين الزراعيين لتطوير المنصة وتسويقها.`,
      aboutHomeButton: `استكشف المنصة الرئيسية <span>↗</span>`, aboutGalleryButton: `شاهد معرض التطبيق <span>↗</span>`
    },
    es: {
      heroEyebrow: `INTELIGENCIA AGRÍCOLA HÍBRIDA`,
      heroHeading: `Observa el campo.<br><em>Comprende lo que necesita.</em>`,
      heroCopy: `Un flujo de trabajo integrado para evaluar cultivos con datos satelitales, imágenes de drones e información geoespacial práctica, en línea y sin conexión.`,
      heroExplore: `Explorar la plataforma <span>↓</span>`, heroGallery: `Ver la galería de la aplicación <span>↗</span>`,
      modalCreatorName: `Creado por Khaled Albakour`, modalCreatorRole: `Especialista geoespacial y desarrollador web`,
      creatorRights: `© 2024–2026 AGRI-EYE TRIO K. Todos los derechos reservados. El contenido, los textos, el diseño y los recursos de marca no pueden reproducirse ni redistribuirse sin autorización previa por escrito.`,
      aboutHeroLabel: `LA HISTORIA DETRÁS DE LA PLATAFORMA`,
      aboutHeroHeading: `Un camino autodidacta hacia la <span class="text-gradient">agricultura geoespacial.</span>`,
      aboutHeroLead: `AGRI-EYE TRIO K evolucionó de scripts agrícolas a una plataforma híbrida de escritorio que conecta el análisis satelital, los SIG y flujos de drones dirigidos, con especial atención a las explotaciones con conectividad limitada.`,
      aboutScrollCue: `DESPLÁZATE PARA RECORRER LA HISTORIA <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — EL FUNDADOR`,
      aboutFounderHeading: `Aprender en circunstancias difíciles. Construir con constancia.`,
      aboutFounderText: `Soy Khaled Albakour, desarrollador sirio y creador de AGRI-EYE TRIO K. Mi formación reglada es un certificado de secundaria científica de 2011; no tengo un título universitario. La guerra en Siria dificultó el acceso a las zonas universitarias y a los estudios formales, por lo que continué aprendiendo de forma autodidacta en casa: empecé con mantenimiento informático y fundamentos de programación, y después estudié ciencias ambientales, geografía y libros científicos de nivel universitario.`,
      aboutOriginLabel: `02 — EL RECORRIDO DE APRENDIZAJE`,
      aboutOriginHeading: `Del mantenimiento informático al análisis geoespacial.`,
      aboutOriginText1: `<strong>2020:</strong> inicié un estudio autodidacta sistemático de programación, mantenimiento informático, ciencias ambientales y geografía. <strong>2022:</strong> empecé a aprender SIG y flujos de datos espaciales.`,
      aboutOriginText2: `<strong>2023–2024:</strong> escribí y mejoré scripts agrícolas, estudié Google Earth Engine y la teledetección satelital. En 2024 empecé a desarrollar la idea de GeoAI y a diseñar el sitio web y el proyecto agrícola híbrido AGRI-EYE.`,
      aboutMethodLabel: `03 — EN LÍNEA Y SIN CONEXIÓN`,
      aboutMethodHeading: `Una plataforma. Dos flujos complementarios.`,
      aboutOnlineTitle: `ONLINE · Evaluación satelital`,
      aboutOnlineText: `Los flujos compatibles de Google Earth Engine revisan datos satelitales y ambientales para el cultivo, los límites del campo y el periodo seleccionados, ayudando a identificar posibles zonas de bajo vigor o estrés hídrico.`,
      aboutOfflineTitle: `OFFLINE · Imágenes locales de drones`,
      aboutOfflineText: `Las imágenes locales de drones y las capas GeoTIFF pueden revisarse sin una sesión activa de procesamiento satelital, algo útil en explotaciones con internet débil o inexistente. Después se puede prestar más atención a zonas concretas.`,
      aboutWorkflowLabel: `04 — INSPECCIÓN DIRIGIDA CON DRONES`,
      aboutWorkflowHeading: `De la evaluación satelital a una inspección focalizada.`,
      aboutWorkflowText: `El flujo previsto consiste en analizar el campo en línea, identificar zonas candidatas con bajo vigor o estrés hídrico, preparar un paquete de misión compatible para el dron y continuar en modo Offline con una inspección más detallada. Centrarse en partes seleccionadas puede evitar vuelos innecesarios sobre toda la finca y reducir el uso de batería; el ahorro real depende del campo, la misión, el equipo y la validación. La planificación de misiones y las comprobaciones de compatibilidad siguen perfeccionándose.`,
      aboutScienceLabel: `05 — INFORMES, EXPORTACIONES Y RESPONSABILIDAD CIENTÍFICA`,
      aboutScienceHeading: `Resultados profesionales, interpretados con responsabilidad.`,
      aboutScienceText: `AGRI-EYE TRIO K admite informes profesionales en cuatro idiomas y exportaciones geoespaciales como KML y KMZ, además de formatos VRA y de datos de campo compatibles con determinados tractores y flujos de agricultura de precisión. Los formatos exactos dependen del módulo, la configuración de exportación y el equipo. Los indicadores de teledetección y los proxies de riesgo son señales preliminares, no pruebas de enfermedad, mediciones directas de agua ni predicciones confirmadas de rendimiento; siguen siendo esenciales las observaciones y pruebas de campo.`,
      aboutVisionLabel: `06 — CRONOLOGÍA DEL DESARROLLO`,
      aboutVisionHeading: `De una aplicación de escritorio a flujos de campo más amplios.`,
      aboutVisionText: `<strong>2024:</strong> definí el concepto GeoAI y la dirección híbrida del proyecto. <strong>2025:</strong> AGRI-EYE TRIO K V1.0 tomó forma como aplicación de escritorio para Windows. <strong>2026:</strong> se ampliaron los módulos de cultivo, los idiomas y los informes profesionales. Se están adaptando nuevos motores científicos a distintos cultivos y regiones; el flujo de misiones de drones sigue en desarrollo y pruebas. Las versiones para Android y iPhone están previstas y deben considerarse en desarrollo hasta su lanzamiento.`,
      aboutClosingLabel: `EL OBJETIVO`,
      aboutClosingHeading: `Pensada para agricultores, especialmente donde la conexión es limitada.`,
      aboutClosingText: `Mi objetivo es ayudar a los agricultores a tomar decisiones de monitoreo mejor informadas, reducir el desperdicio evitable de agua y fertilizantes, favorecer un mejor desarrollo del cultivo, priorizar inspecciones oportunas e investigar antes posibles plagas o enfermedades. La visión a largo plazo es ofrecer un servicio de monitoreo agrícola con informes satelitales y de drones semanales y mensuales, mediante planes de suscripción claros. Estoy abierto a oportunidades laborales adecuadas y a colaboraciones serias con inversores o profesionales agrícolas para desarrollar y comercializar la plataforma.`,
      aboutHomeButton: `Explorar la plataforma principal <span>↗</span>`, aboutGalleryButton: `Ver la galería de la aplicación <span>↗</span>`
    },
    it: {
      siteTitle: `AGRI-EYE TRIO K | Supporto geospaziale alle decisioni agricole`,
      siteDescription: `Piattaforma ibrida di supporto alle decisioni agricole che combina telerilevamento satellitare, analisi di immagini da drone e GeoTIFF, indicatori GIS e report.`,
      galleryTitle: `Galleria dell'applicazione | AGRI-EYE TRIO K`,
      galleryDescription: `Esplora schermate di AGRI-EYE TRIO K, cartografia GIS, flussi di analisi delle colture e analisi di immagini da drone e GeoTIFF.`,
      aboutTitle: `Informazioni sul progetto | AGRI-EYE TRIO K`,
      aboutDescription: `Scopri Khaled Albakour, l'idea, il flusso di lavoro e l'uso responsabile di AGRI-EYE TRIO K, una piattaforma ibrida geospaziale per il supporto alle decisioni agricole.`,
      menuOpenAria: `Apri la navigazione`, menuCloseAria: `Chiudi la navigazione`, chooseLanguageAria: `Scegli la lingua`, previousCropsAria: `Colture precedenti`, nextCropsAria: `Colture successive`, cropCardsAria: `Schede informative sulle colture`, contactWhatsAppLabel: `WhatsApp`, contactGitHubLabel: `GitHub · Progetti`,
      loaderCaption: `CARICAMENTO DELL'INTELLIGENZA AGRICOLA`, idxHeroScroll: `SCORRI PER ESPLORARE <span>↓</span>`, galleryViewImage: `Visualizza immagine ↗`, galleryVideoChip: `MP4 · ORIZZONTALE`,
      navPlatform: `Piattaforma`, navAboutProject: `Il progetto`, navCapabilities: `Funzionalità`, navCropInfo: `Colture`, navGallery: `Galleria`, navContact: `Contatti <span>↗</span>`, navScreenshots: `Schermate`, navMainPage: `← Pagina principale`,
      idxPlatformKicker: `L'APPROCCIO AGRI-EYE <span>01 — PIATTAFORMA</span>`,
      idxIntroHeading: `Dai pixel alle <span class="text-gradient">decisioni sul campo.</span>`,
      idxIntroP1: `AGRI-EYE TRIO K è una piattaforma ibrida per il monitoraggio agricolo che riunisce dati satellitari, immagini da drone e strumenti GIS in un unico flusso di lavoro. Consente di esaminare le condizioni del campo, confrontare gli indicatori e individuare aree che potrebbero richiedere un controllo più approfondito.`,
      idxIntroP2: `È uno strumento di supporto alle decisioni e di valutazione preliminare. Gli indicatori satellitari e gli indicatori relativi di rischio orientano le verifiche sul campo; non sostituiscono analisi di laboratorio, valutazioni agronomiche o diagnosi confermate.`,
      modeLabel1: `01 / ONLINE`, modeTitle1: `Analisi satellitare`, modeDesc1: `Usa i flussi di Google Earth Engine per esplorare indicatori di vegetazione, umidità e ambiente per il campo e il periodo selezionati.`, modeTags1: `<span>Sentinel-2</span><span>Sentinel-1</span><span>Dati climatici</span>`,
      modeLabel2: `02 / OFFLINE`, modeTitle2: `Drone e immagini locali`, modeDesc2: `Lavora con immagini raster locali supportate, esamina le variazioni spaziali e prepara zone candidate per verifiche sul campo.`, modeTags2: `<span>GeoTIFF</span><span>Livelli GIS</span><span>Esportazione VRA</span>`,
      modeLabel3: `03 / FLUSSO DI LAVORO`, modeTitle3: `Dall'analisi all'azione`, modeDesc3: `Esamina livelli cartografici, KPI e statistiche, quindi esporta report e file geospaziali per documentare il lavoro sul campo.`, modeTags3: `<span>Mappe</span><span>Report</span><span>Zone obiettivo</span>`,
      idxCapKicker: `PER IL LAVORO SUL CAMPO <span>02 — FUNZIONALITÀ</span>`, idxCapHeading: `Un unico ambiente.<br><span class="text-gradient">Molteplici livelli di conoscenza.</span>`, idxCapLead: `Riunisce cartografia, analisi preliminare delle colture e strumenti di esportazione in un flusso di lavoro desktop pratico.`,
      capTitle1: `Mappatura GIS del campo`, capDesc1: `Disegna o modifica un'area di interesse, esplora le mappe di base ed esamina i livelli di analisi nel contesto geografico.`,
      capTitle2: `Indicatori di vegetazione e umidità`, capDesc2: `Esamina indici supportati come NDVI, NDRE, NDMI, NDWI ed EVI2 quando i dati disponibili lo consentono.`,
      capTitle3: `Analisi preliminare per coltura`, capDesc3: `I flussi dedicati alle colture evidenziano schemi candidati e indicatori relativi da approfondire, non diagnosi definitive.`,
      capTitle4: `Zone obiettivo per i droni`, capDesc4: `Esporta zone candidate e pacchetti geospaziali per pianificare ispezioni ad alta risoluzione e controlli successivi.`,
      capTitle5: `Report ed esportazioni GIS`, capDesc5: `Crea riepiloghi PDF ed esporta formati supportati, inclusi GeoJSON, KML/KMZ e Shapefile.`, capTitle6: `Flusso di lavoro ibrido`, capDesc6: `Usa l'analisi satellitare online o flussi offline supportati con immagini da drone e raster, secondo l'attività e i dati disponibili.`,
      comparisonKicker: `POSIZIONAMENTO DEL PROGETTO <span>03 — PANORAMICA</span>`, comparisonOverline: `BASATO SU UN FLUSSO DI LAVORO IBRIDO`, comparisonHeading: `Uno sguardo mirato all'<span class="text-gradient">approccio AGRI-EYE.</span>`,
      comparisonDesc: `Una panoramica di come AGRI-EYE TRIO K riunisce analisi preliminare delle colture, immagini da drone offline, GIS e report in un unico flusso. È un confronto generale, non l'affermazione che una piattaforma sia la migliore per ogni attività.`,
      comparisonNote: `Le funzionalità variano in base alla versione, ai dataset disponibili e al contesto operativo. I risultati sono indicazioni preliminari da verificare sul campo.`, comparisonCaption: `Panoramica delle funzionalità del progetto · seleziona l'immagine per ingrandirla`, openFullImage: `Apri l'immagine completa ↗`,
      idxCropKicker: `ESPLORA I MODULI COLTURALI <span>04 — COLTURE</span>`, idxCropHeading: `Ogni coltura ha<br><span class="text-gradient">la sua storia.</span>`, idxCropLead: `Scegli una scheda per scoprire cosa analizza il relativo flusso di valutazione.`, idxCropNote: `Scorri orizzontalmente o usa le frecce per esplorare tutti i moduli.`,
      cropTypeWheat: `CEREALE`, cropNameWheat: `Grano`, cropDescWheat: `Esamina il vigore della vegetazione e lo sviluppo della copertura tramite indici supportati. Gli indicatori legati all'umidità e le variazioni spaziali possono segnalare aree da controllare; i modelli stagionali possono contribuire a una valutazione relativa del potenziale produttivo quando i dati sono adeguati.`, cropPillsWheat: `<span>NDVI / NDRE</span><span>Indicatore di stress idrico</span><span>Zone da controllare</span>`,
      cropTypeCorn: `CEREALE`, cropNameCorn: `Mais`, cropDescCorn: `Esplora il vigore della coltura, le variazioni della copertura e i modelli legati all'umidità nel campo selezionato. La mappa può aiutare a dare priorità ai controlli su crescita irregolare o stress possibile; ogni interpretazione della resa resta una stima, non una previsione verificata del raccolto.`, cropPillsCorn: `<span>Indici di crescita</span><span>Indicatore di umidità</span><span>Variabilità del campo</span>`,
      cropTypePotato: `TUBERO`, cropNamePotato: `Patata`, cropDescPotato: `Mappa le condizioni della vegetazione e le differenze interne al campo che possono essere legate allo sviluppo o allo stress idrico. Le zone candidate possono guidare controlli su copertura irregolare, aree umide o altri sintomi osservabili; i soli dati satellitari non confermano una specifica malattia della patata.`, cropPillsPotato: `<span>NDVI / NDRE</span><span>Indicatore idrico</span><span>Zone obiettivo</span>`,
      cropTypeOlive: `OLIVETO`, cropNameOlive: `Olivo`, cropDescOlive: `Distingue gli indicatori di crescita da quelli legati all'umidità e individua schemi che potrebbero richiedere un controllo dell'oliveto. Le indicazioni su occhio di pavone ed erosione sono valutazioni preliminari; chioma, erba, suolo e ombre possono mescolarsi nei pixel satellitari.`, cropPillsOlive: `<span>Indice di crescita</span><span>Indicatore di stress idrico</span><span>Possibile occhio di pavone</span>`,
      cropTypePeanut: `LEGUMINOSA`, cropNamePeanut: `Arachide`, cropDescPeanut: `Esplora la crescita della copertura, i modelli di umidità e le aree candidate per controlli successivi. L'analisi preliminare di maculatura fogliare tardiva e ristagno idrico, insieme a un indicatore del rischio di aflatossine, aiuta a dare priorità alle ispezioni ma non conferma infezioni né misura il contenuto di aflatossine.`, cropPillsPeanut: `<span>Indici di crescita</span><span>Possibile ristagno</span><span>Indicatore di rischio</span>`,
      cropTypeSoil: `VALUTAZIONE DEL CAMPO`, cropNameSoil: `Analisi del suolo`, cropDescSoil: `Offre un flusso dedicato all'analisi del suolo tramite il motore online supportato. I risultati dipendono dai dataset disponibili e sono indicazioni preliminari, non sostituti del campionamento e delle analisi di laboratorio.`, cropPillsSoil: `<span>Motore online</span><span>Contesto spaziale</span><span>Controllo del suolo</span>`,
      cropTypeUniversal: `MULTICOLTURA`, cropNameUniversal: `Motore universale`, cropDescUniversal: `Un flusso generale per dataset online o offline supportati, quando un modulo specifico per coltura non è adatto. Riunisce strumenti comuni di mappatura e indicatori in un percorso flessibile; i risultati dipendono dalla qualità dei dati di ingresso.`, cropPillsUniversal: `<span>Online / Offline</span><span>Livelli raster</span><span>Esportazioni GIS</span>`,
      idxVisualLabel: `OSSERVA · CONFRONTA · VERIFICA`, idxVisualHeading: `Maggiore visibilità.<br><span class="text-gradient">Controlli sul campo più informati.</span>`, idxVisualLink: `Esplora le schermate dell'applicazione <span>↗</span>`,
      founderKicker: `CREATORE DEL PROGETTO <span>06 — FONDATORE</span>`, founderOverline: `DAGLI SCRIPT EARTH ENGINE A UNA PIATTAFORMA IBRIDA`, founderHeading: `Nata dalla curiosità. <span class="text-gradient">Guidata dai problemi del campo.</span>`, founderName: `Khaled Albakour`, founderRole: `Piattaforma geospaziale di supporto alle decisioni agricole · Creatore`,
      founderDesc1: `AGRI-EYE TRIO K è una piattaforma geospaziale di supporto alle decisioni agricole che combina GIS, telerilevamento satellitare, analisi di immagini da drone e GeoTIFF, indicatori agricoli e flussi di valutazione scientifica. Supporta analisi online con Google Earth Engine per grano, patata e mais, oltre a flussi offline con raster locali per immagini da drone. In base al modulo e ai dati disponibili, l'ambiente integra indicatori di vegetazione, umidità, clima, condizioni favorevoli alle malattie e resa relativa in un workspace GIS interattivo con report professionali. Sono disponibili anche moduli per olivo, arachide e analisi del suolo, oltre a un flusso universale; gli output dipendono dal motore, dal dataset e dalla modalità di elaborazione selezionati.`,
      founderDesc2: `Ho sviluppato questo progetto per collegare il mio interesse pratico per l'agricoltura alle competenze in crescita in GIS, telerilevamento, sviluppo software e analisi dei dati.`,
      founderDesc3: `Il lavoro ha evidenziato anche il valore della formazione accademica nelle tecnologie geospaziali, nella scienza dei dati agricoli e nell'ingegneria del software, soprattutto per convalidare i modelli di telerilevamento tramite osservazioni sul campo. Quando la validazione non è stata stabilita, i risultati sono presentati come indicatori, proxy relativi o aree candidate da esaminare, non come diagnosi confermate.`, founderCaption: `Khaled Albakour · Creatore del progetto`,
      idxContactKicker: `RESTIAMO IN CONTATTO <span>07 — CONTATTI</span>`, idxContactHeading: `Costruita intorno al<br><span class="text-gradient">campo reale.</span>`, idxContactLead: `Per informazioni sul progetto, collaborazioni professionali o un confronto tecnico su AGRI-EYE TRIO K, contattami.`,
      footerTagline: `Intelligenza agricola ibrida · Satellite + Drone · Online + Offline`, footerGalleryLink: `Galleria dell'applicazione ↗`, footerMainLink: `← Torna alla pagina principale`, creatorCredit: `Creato da Khaled Albakour · Specialista geospaziale e sviluppatore web`, creatorRights: `© 2024–2026 AGRI-EYE TRIO K. Tutti i diritti riservati. I contenuti, i testi, il design e gli elementi del marchio non possono essere riprodotti o ridistribuiti senza previa autorizzazione scritta.`, backTopAria: `Torna all'inizio`, backTopTitle: `Torna all'inizio`, whatsAppAria: `Chatta su WhatsApp`, whatsAppTitle: `WhatsApp`, idxAboutButton: `Informazioni sul progetto <span>↗</span>`,
      aboutHeroLabel: `LA STORIA DIETRO LA PIATTAFORMA`, aboutHeroHeading: `Un percorso autodidatta verso l'<span class="text-gradient">agricoltura geospaziale.</span>`, aboutHeroLead: `AGRI-EYE TRIO K è passato da script agricoli a una piattaforma desktop ibrida che collega analisi satellitare, GIS e flussi di lavoro con droni mirati, con particolare attenzione alle aziende agricole con connettività limitata.`, aboutScrollCue: `SCORRI PER SEGUIRE LA STORIA <span aria-hidden="true">↓</span>`,
      aboutFounderLabel: `01 — IL FONDATORE`, aboutFounderHeading: `Imparare nelle difficoltà. Costruire con perseveranza.`, aboutFounderText: `Sono Khaled Albakour, sviluppatore siriano e creatore di AGRI-EYE TRIO K. La mia formazione formale è un diploma di scuola secondaria a indirizzo scientifico del 2011; non possiedo una laurea universitaria. La guerra in Siria ha reso difficile raggiungere le sedi universitarie e proseguire gli studi formali, quindi ho continuato a imparare da autodidatta a casa, iniziando dalla manutenzione informatica e dai fondamenti della programmazione e passando poi alle scienze ambientali, alla geografia e a testi scientifici di livello universitario.`,
      aboutOriginLabel: `02 — IL PERCORSO DI APPRENDIMENTO`, aboutOriginHeading: `Dalla riparazione dei computer all'analisi geospaziale.`, aboutOriginText1: `<strong>2020:</strong> ho iniziato uno studio autodidatta strutturato di programmazione, manutenzione informatica, scienze ambientali e geografia. <strong>2022:</strong> ho iniziato a studiare GIS e flussi di dati spaziali.`, aboutOriginText2: `<strong>2023–2024:</strong> ho scritto e migliorato script agricoli, studiato Google Earth Engine e telerilevamento satellitare. Nel 2024 ho iniziato a sviluppare il concetto GeoAI e a progettare il sito e il progetto agricolo ibrido AGRI-EYE.`,
      aboutMethodLabel: `03 — ONLINE + OFFLINE`, aboutMethodHeading: `Un'unica piattaforma. Due flussi complementari.`, aboutOnlineTitle: `ONLINE · Analisi satellitare preliminare`, aboutOnlineText: `I flussi supportati di Google Earth Engine esaminano dati satellitari e ambientali per la coltura, i confini del campo e il periodo selezionati, aiutando a individuare aree candidate con scarso vigore vegetativo o possibili segnali di stress idrico.`, aboutOfflineTitle: `OFFLINE · Immagini locali da drone`, aboutOfflineText: `Le immagini locali da drone e i livelli GeoTIFF possono essere esaminati senza una sessione attiva di elaborazione satellitare, una possibilità utile per le aziende agricole con internet debole o assente. È quindi possibile concentrarsi su aree selezionate.`,
      aboutWorkflowLabel: `04 — RICOGNIZIONE MIRATA CON DRONE`, aboutWorkflowHeading: `Dall'analisi satellitare a un controllo mirato del campo.`, aboutWorkflowText: `Il flusso previsto consiste nell'analizzare il campo online, individuare zone candidate con crescita debole o stress idrico, preparare un pacchetto di missione drone supportato e poi usare la modalità Offline per esaminare più da vicino quelle aree. Concentrarsi su porzioni selezionate può ridurre voli non necessari sull'intera azienda e il consumo della batteria; il risparmio effettivo dipende da campo, impostazioni della missione, attrezzatura e validazione. La pianificazione delle missioni e le verifiche di compatibilità sono ancora in fase di perfezionamento.`,
      aboutScienceLabel: `05 — REPORT, ESPORTAZIONI E RESPONSABILITÀ SCIENTIFICA`, aboutScienceHeading: `Risultati professionali, interpretati responsabilmente.`, aboutScienceText: `AGRI-EYE TRIO K supporta report professionali in quattro lingue ed esportazioni geospaziali come KML e KMZ, oltre a formati VRA e dati di campo supportati per trattori compatibili e flussi di agricoltura di precisione. I formati esatti dipendono dal modulo, dalle impostazioni di esportazione e dalla compatibilità delle attrezzature. Gli indicatori di telerilevamento e i proxy di rischio sono segnali preliminari, non prove di malattia, misure dirette della quantità d'acqua o previsioni confermate della resa; restano essenziali le osservazioni sul campo e le verifiche appropriate.`,
      aboutVisionLabel: `06 — CRONOLOGIA DELLO SVILUPPO`, aboutVisionHeading: `Da un'applicazione desktop a flussi di lavoro sul campo più ampi.`, aboutVisionText: `<strong>2024:</strong> ho definito il concetto GeoAI e l'orientamento ibrido del progetto. <strong>2025:</strong> AGRI-EYE TRIO K V1.0 ha preso forma come applicazione desktop per Windows. <strong>2026:</strong> lo sviluppo ha ampliato i moduli per le colture, il supporto linguistico e i report professionali. Nuovi motori scientifici vengono adattati a colture e regioni differenti; il flusso delle missioni drone è ancora in sviluppo e test. Le versioni per Android e iPhone sono previste e restano in lavorazione fino al rilascio.`,
      aboutClosingLabel: `L'OBIETTIVO`, aboutClosingHeading: `Pensata per gli agricoltori, soprattutto dove la connessione è limitata.`, aboutClosingText: `Il mio obiettivo è aiutare gli agricoltori a prendere decisioni di monitoraggio più informate, ridurre gli sprechi evitabili di acqua e fertilizzanti, sostenere una migliore crescita delle colture, dare priorità ai controlli tempestivi sul campo e indagare prima possibili pressioni di parassiti o malattie. La visione a lungo termine è un servizio di monitoraggio agricolo con report satellitari e da drone settimanali e mensili e piani di abbonamento chiari. Sono aperto a opportunità di lavoro pertinenti e a collaborazioni serie con investitori o professionisti agricoli per sviluppare e commercializzare la piattaforma.`, aboutHomeButton: `Esplora la piattaforma principale <span>↗</span>`, aboutGalleryButton: `Visualizza la galleria dell'applicazione <span>↗</span>`,
      galleryEyebrow: `<span class="live-dot"></span> ALL'INTERNO DELL'AMBIENTE DI LAVORO`, galleryHeading: `Esplora l'<br><em>interfaccia AGRI-EYE.</em>`, galleryLead: `Scopri strumenti cartografici, livelli di analisi e funzioni di report che collegano l'analisi satellitare ai flussi di lavoro con droni.`, galleryBrowseButton: `Sfoglia le schermate ↓`, galleryVideoKicker: `PANORAMICA DEL PRODOTTO <span>01 — VIDEO</span>`, galleryVideoHeading: `Guarda il flusso di lavoro<br><span class="text-gradient">in azione.</span>`, galleryVideoLead: `Una panoramica di analisi delle colture, cartografia e report in AGRI-EYE TRIO K.`, galleryVideoEmptyTitle: `Panoramica di AGRI-EYE TRIO K`, galleryVideoEmptyPath: `Una guida ad analisi delle colture, mappe e report.`, galleryVideoEmptyHint: `Usa i controlli per riprodurre, cercare o visualizzare il video a schermo intero.`, videoFullscreenLabel: `Schermo intero`, videoControlsAria: `Controlli video`, videoProgressAria: `Avanzamento del video`,
      galleryShotsKicker: `L'APPLICAZIONE DESKTOP <span>02 — SCHERMATE</span>`, galleryShotsHeading: `Uno sguardo più da vicino<br><span class="text-gradient">agli strumenti.</span>`, galleryShotsLead: `Le schermate orizzontali mostrano esempi dell'ambiente di lavoro e delle viste di analisi. Seleziona un'immagine per ingrandirla.`, shot1Label: `01 / AMBIENTE DI ANALISI`, shot1Title: `Dashboard di analisi del campo`, shot1Desc: `Mappa, indicatori spaziali e metriche riepilogative in un unico ambiente.`, shot2Label: `02 / INTERFACCIA`, shot2Title: `Ambiente dell'applicazione`, shot2Desc: `Selezione della coltura e controlli principali dell'analisi.`, shot3Label: `03 / VISTA GIS`, shot3Title: `Panoramica geospaziale`, shot3Desc: `Esplora l'approccio cartografico al monitoraggio agricolo.`, shot4Label: `04 / MODULO SUOLO`, shot4Title: `Concetto di analisi del suolo`, shot4Desc: `Valutazione preliminare del suolo nell'ambito di un'analisi più ampia del campo.`, shot5Label: `05 / CONTESTO DEL CAMPO`, shot5Title: `Prospettiva dal terreno`, shot5Desc: `Gli indicatori di telerilevamento funzionano meglio insieme alle osservazioni sul campo.`, shot6Label: `06 / MONITORAGGIO DELLE COLTURE`, shot6Title: `Contesto del monitoraggio`, shot6Desc: `Le condizioni stagionali delle colture e la variabilità del campo danno contesto all'analisi.`, galleryBackButton: `← Torna alla pagina principale`, galleryCropButton: `Esplora le informazioni sulle colture ↗`, galleryCropKicker: `MODULI COLTURALI <span>03 — APPROFONDIMENTI</span>`, galleryCropHeading: `Informazioni specifiche per coltura,<br><span class="text-gradient">in un'unica piattaforma.</span>`, galleryCropLead: `Scopri come la piattaforma organizza i flussi di analisi preliminare per coltura.`, galleryMiniCrop1: `Grano ↗`, galleryMiniCrop2: `Mais ↗`, galleryMiniCrop3: `Patata ↗`, galleryMiniCrop4: `Olivo ↗`, galleryMiniCrop5: `Arachide ↗`,
      heroEyebrow: `INTELLIGENZA AGRICOLA IBRIDA`, heroHeading: `Osserva il campo.<br><em>Comprendi di cosa ha bisogno.</em>`, heroCopy: `Un flusso integrato per la valutazione delle colture con dati satellitari, immagini da drone e analisi geospaziale pratica, online e offline.`, heroExplore: `Esplora la piattaforma <span>↓</span>`, heroGallery: `Visualizza la galleria dell'app <span>↗</span>`, modalCreatorName: `Creato da Khaled Albakour`, modalCreatorRole: `Specialista geospaziale e sviluppatore web`
    }
  };
  translations.it = { ...translations.en, ...extendedTranslations.it };
  ['en', 'ar', 'es'].forEach((language) => Object.assign(translations[language], extendedTranslations[language]));

  let currentLanguage = 'en';
  let currentTheme = 'dark';
  let isSeekingVideo = false;
  const themeLabels = {
    en: { light: 'Switch to light theme', dark: 'Switch to dark theme' },
    ar: { light: 'التبديل إلى الوضع الفاتح', dark: 'التبديل إلى الوضع الداكن' },
    es: { light: 'Cambiar al tema claro', dark: 'Cambiar al tema oscuro' },
    it: { light: 'Passa al tema chiaro', dark: 'Passa al tema scuro' }
  };
  function updateThemeButton() {
    const labels = themeLabels[currentLanguage] || themeLabels.en;
    $$('[data-theme-toggle]').forEach((button) => {
      const target = currentTheme === 'dark' ? 'light' : 'dark';
      const label = labels[target];
      button.setAttribute('aria-label', label); button.title = label;
      button.setAttribute('aria-pressed', String(currentTheme === 'light'));
      const icon = $('[data-theme-icon]', button); if (icon) icon.textContent = currentTheme === 'dark' ? '☼' : '☾';
    });
  }
  function applyTheme(theme, persist = true) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = currentTheme;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', currentTheme === 'light' ? '#f4f8f2' : '#061812');
    updateThemeButton();
    if (persist) { try { localStorage.setItem('agriEyeWebsiteTheme', currentTheme); } catch (_) {} }
  }
  let storedTheme = 'dark';
  try { storedTheme = localStorage.getItem('agriEyeWebsiteTheme') || document.documentElement.dataset.theme || 'dark'; } catch (_) {}
  applyTheme(storedTheme, false);
  $$('[data-theme-toggle]').forEach((button) => button.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark')));
  const videoLabels = {
    en: { play: '▶ Play', pause: 'Ⅱ Pause', muted: '♬ Sound off', sound: '♬ Sound on', fullscreen: '⛶ Full screen', exitFullscreen: '⛶ Exit full screen', ready: 'Video ready', playing: 'Playing', paused: 'Paused', ended: 'Video ended', add: 'Video unavailable', press: 'Press play', controlsAria: 'Video controls', progressAria: 'Video progress' },
    ar: { play: '▶ تشغيل', pause: 'Ⅱ إيقاف مؤقت', muted: '♬ كتم الصوت', sound: '♬ تشغيل الصوت', fullscreen: '⛶ ملء الشاشة', exitFullscreen: '⛶ إنهاء ملء الشاشة', ready: 'الفيديو جاهز', playing: 'يعمل الآن', paused: 'متوقف مؤقتًا', ended: 'انتهى الفيديو', add: 'الفيديو غير متاح', press: 'اضغط تشغيل', controlsAria: 'عناصر تحكم الفيديو', progressAria: 'موضع الفيديو' },
    es: { play: '▶ Reproducir', pause: 'Ⅱ Pausar', muted: '♬ Sin sonido', sound: '♬ Activar sonido', fullscreen: '⛶ Pantalla completa', exitFullscreen: '⛶ Salir de pantalla completa', ready: 'Vídeo listo', playing: 'Reproduciendo', paused: 'En pausa', ended: 'Vídeo finalizado', add: 'Vídeo no disponible', press: 'Pulsa reproducir', controlsAria: 'Controles de vídeo', progressAria: 'Progreso del vídeo' },
    it: { play: '▶ Riproduci', pause: 'Ⅱ Pausa', muted: '♬ Audio disattivato', sound: '♬ Attiva audio', fullscreen: '⛶ Schermo intero', exitFullscreen: '⛶ Esci dallo schermo intero', ready: 'Video pronto', playing: 'In riproduzione', paused: 'In pausa', ended: 'Video terminato', add: 'Video non disponibile', press: 'Premi riproduci', controlsAria: 'Controlli video', progressAria: 'Avanzamento video' }
  };
  const formatVideoTime = (value) => {
    if (!Number.isFinite(value) || value < 0) value = 0;
    const mins = Math.floor(value / 60);
    const secs = Math.floor(value % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  function refreshVideoLabels() {
    const video = $('#product-video'), play = $('#video-play'), mute = $('#video-mute'), status = $('#video-status');
    const fullscreen = $('#video-fullscreen');
    if (!video) return;
    const labels = videoLabels[currentLanguage];
    if (play) play.textContent = video.paused ? labels.play : labels.pause;
    if (mute) mute.textContent = video.muted ? labels.muted : labels.sound;
    if (fullscreen) {
      const isFullscreen = Boolean(document.fullscreenElement || video.webkitDisplayingFullscreen || $('#video-frame')?.classList.contains('is-fullscreen-fallback'));
      const fullLabel = isFullscreen ? labels.exitFullscreen : labels.fullscreen;
      const visibleLabel = fullLabel.replace(/^⛶\s*/, '');
      fullscreen.innerHTML = `<span aria-hidden="true" class="fullscreen-glyph">⛶</span><span class="fullscreen-label">${visibleLabel}</span>`;
      fullscreen.setAttribute('aria-label', fullLabel);
      fullscreen.title = fullLabel;
    }
    const progress = $('#video-progress'), time = $('#video-time');
    if (progress) {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      progress.setAttribute('aria-label', labels.progressAria);
      progress.min = '0'; progress.max = '1000'; progress.step = '1'; progress.disabled = duration <= 0;
      if (!isSeekingVideo) progress.value = String(duration > 0 ? Math.round((video.currentTime / duration) * 1000) : 0);
      const pct = duration > 0 ? (Number(progress.value) / 1000) * 100 : 0;
      progress.style.setProperty('--seek-percent', `${pct}%`);
    }
    if (time && !isSeekingVideo) time.textContent = `${formatVideoTime(video.currentTime)} / ${formatVideoTime(video.duration)}`;
    if (status && !video.error) {
      if (!video.paused) status.textContent = labels.playing;
      else if (video.ended) status.textContent = labels.ended;
      else if (video.readyState >= 1) status.textContent = labels.ready;
    }
  }
  function applyLanguage(language, persist = true) {
    currentLanguage = translations[language] ? language : 'en';
    const dict = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', currentLanguage === 'ar');
    const isGalleryPage = document.body.classList.contains('gallery-page');
    const isAboutPage = document.body.classList.contains('about-page');
    const title = dict[isAboutPage ? 'aboutTitle' : isGalleryPage ? 'galleryTitle' : 'siteTitle'];
    const description = dict[isAboutPage ? 'aboutDescription' : isGalleryPage ? 'galleryDescription' : 'siteDescription'];
    if (title) document.title = title;
    const descriptionMeta = $('meta[name="description"]');
    if (descriptionMeta && description) descriptionMeta.setAttribute('content', description);
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute('content', title);
    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    const twitterTitle = $('meta[name="twitter:title"]');
    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    const twitterDescription = $('meta[name="twitter:description"]');
    if (twitterDescription && description) twitterDescription.setAttribute('content', description);
    const ogLocale = $('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', currentLanguage === 'ar' ? 'ar_AR' : currentLanguage === 'es' ? 'es_ES' : currentLanguage === 'it' ? 'it_IT' : 'en_US');
    $$('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) element.innerHTML = dict[key];
    });
    $$('[data-i18n-aria]').forEach((element) => {
      const key = element.getAttribute('data-i18n-aria');
      if (dict[key]) element.setAttribute('aria-label', dict[key]);
    });
    $$('[data-i18n-title]').forEach((element) => {
      const key = element.getAttribute('data-i18n-title');
      if (dict[key]) element.setAttribute('title', dict[key]);
    });
    $$('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage)));
    updateThemeButton();
    refreshVideoLabels();
    if (persist) { try { localStorage.setItem('agriEyeWebsiteLanguage', currentLanguage); } catch (_) {} }
  }
  $$('[data-lang]').forEach((button) => button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
    if (menu && nav && window.matchMedia('(max-width: 820px)').matches) {
      nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰'; menu.setAttribute('aria-label', translations[currentLanguage].menuOpenAria || 'Open navigation');
    }
  }));
  let storedLanguage = 'en';
  try { storedLanguage = localStorage.getItem('agriEyeWebsiteLanguage') || 'en'; } catch (_) {}
  applyLanguage(storedLanguage, false);

  // Responsive navigation.
  const menu = $('.menu-toggle'), nav = $('.nav-links');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '×' : '☰';
      const dict = translations[currentLanguage];
      menu.setAttribute('aria-label', open ? (dict.menuCloseAria || 'Close navigation') : (dict.menuOpenAria || 'Open navigation'));
    });
    $$('a', nav).forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
      menu.setAttribute('aria-label', translations[currentLanguage].menuOpenAria || 'Open navigation');
    }));
  }

  // Top button visibility.
  const topButton = $('.back-top');
  const updateTop = () => { if (topButton) topButton.classList.toggle('visible', window.scrollY > 450); };
  if (topButton) {
    topButton.addEventListener('click', (event) => {
      event.preventDefault();
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }
  window.addEventListener('scroll', updateTop, { passive: true }); updateTop();

  // Horizontal crop carousel.
  const track = $('#crop-track'), progress = $('#crop-progress');
  if (track) {
    const step = () => Math.max(250, Math.min(330, track.clientWidth * .72));
    $('#crop-prev')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    $('#crop-next')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    const update = () => {
      if (!progress) return;
      const max = track.scrollWidth - track.clientWidth;
      progress.style.width = (max <= 0 ? 100 : Math.max(14, 14 + 86 * Math.min(1, Math.abs(track.scrollLeft) / max))) + '%';
    };
    track.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
  }

  // Mobile-safe video player: lazy-load metadata, explicit user playback, finger-friendly seeking, and fullscreen fallbacks.
  const video = $('#product-video'), empty = $('#video-empty'), play = $('#video-play'), mute = $('#video-mute'), status = $('#video-status'), videoProgressInput = $('#video-progress'), fullscreen = $('#video-fullscreen'), videoFrame = $('#video-frame');
  if (video) {
    let sourceAttached = Boolean($('source', video)?.getAttribute('src'));
    let sourceReady = video.readyState >= 1;
    let fallbackFullscreen = false;
    const source = $('source', video);
    const showState = (state) => { if (status) status.textContent = state; };
    const attachSource = () => {
      if (sourceAttached) return;
      const src = source?.dataset.src;
      if (!src) return;
      source.src = src;
      sourceAttached = true;
      video.preload = 'metadata';
      video.load();
    };
    const updateSeekVisual = (value) => {
      if (!videoProgressInput) return;
      const pct = Math.max(0, Math.min(100, Number(value) / 10));
      videoProgressInput.style.setProperty('--seek-percent', `${pct}%`);
      if (Number.isFinite(video.duration) && video.duration > 0) {
        const preview = video.duration * pct / 100;
        const time = $('#video-time');
        if (time) time.textContent = `${formatVideoTime(preview)} / ${formatVideoTime(video.duration)}`;
      }
    };
    const updateVideoProgress = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (videoProgressInput) {
        videoProgressInput.min = '0'; videoProgressInput.max = '1000'; videoProgressInput.step = '1';
        videoProgressInput.disabled = duration <= 0;
        if (!isSeekingVideo) {
          videoProgressInput.value = String(duration > 0 ? Math.round(video.currentTime / duration * 1000) : 0);
          updateSeekVisual(videoProgressInput.value);
        }
      }
      if (!isSeekingVideo) {
        const time = $('#video-time');
        if (time) time.textContent = `${formatVideoTime(video.currentTime)} / ${formatVideoTime(video.duration)}`;
      }
      refreshVideoLabels();
    };
    const togglePlayback = async () => {
      attachSource();
      if (video.paused || video.ended) {
        if (video.ended) { try { video.currentTime = 0; } catch (_) {} }
        try {
          const result = video.play();
          if (result && typeof result.then === 'function') await result;
          if (empty) empty.classList.add('hidden');
          showState(videoLabels[currentLanguage].playing);
        } catch (_) {
          showState(videoLabels[currentLanguage].press);
          if (!sourceReady && empty) empty.classList.remove('hidden');
        }
      } else {
        video.pause();
      }
      refreshVideoLabels();
    };
    const commitSeek = () => {
      if (!videoProgressInput || !Number.isFinite(video.duration) || video.duration <= 0) { isSeekingVideo = false; return; }
      const ratio = Math.max(0, Math.min(1000, Number(videoProgressInput.value) || 0)) / 1000;
      try { video.currentTime = ratio * video.duration; } catch (_) {}
      isSeekingVideo = false;
      updateVideoProgress();
    };
    const enterFullscreen = async () => {
      attachSource();
      try {
        if (fallbackFullscreen) {
          exitFallbackFullscreen();
          return;
        } else if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else if (video.webkitDisplayingFullscreen && typeof video.webkitExitFullscreen === 'function') {
          video.webkitExitFullscreen();
        } else {
          const appleMobile = /iPhone|iPod|iPad/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
          if (appleMobile && typeof video.webkitEnterFullscreen === 'function') {
            // iOS uses its native media controller in fullscreen, including native seeking.
            video.controls = true;
            video.webkitEnterFullscreen();
          } else if (videoFrame?.requestFullscreen) {
            await videoFrame.requestFullscreen();
          } else if (video.requestFullscreen) {
            await video.requestFullscreen();
          } else {
            fallbackFullscreen = true;
            videoFrame?.classList.add('is-fullscreen-fallback');
            document.body.classList.add('video-fallback-open');
          }
        }
      } catch (_) {
        try {
          if (typeof video.webkitEnterFullscreen === 'function') {
            video.controls = true;
            video.webkitEnterFullscreen();
          } else {
            fallbackFullscreen = true;
            videoFrame?.classList.add('is-fullscreen-fallback');
            document.body.classList.add('video-fallback-open');
          }
        } catch (_) {
          fallbackFullscreen = true;
          videoFrame?.classList.add('is-fullscreen-fallback');
          document.body.classList.add('video-fallback-open');
        }
      }
      refreshVideoLabels();
    };
    const exitFallbackFullscreen = () => {
      if (!fallbackFullscreen) return;
      fallbackFullscreen = false;
      videoFrame?.classList.remove('is-fullscreen-fallback');
      document.body.classList.remove('video-fallback-open');
      refreshVideoLabels();
    };

    video.addEventListener('loadedmetadata', () => { sourceReady = true; if (empty) empty.classList.add('hidden'); showState(videoLabels[currentLanguage].ready); updateVideoProgress(); });
    video.addEventListener('durationchange', updateVideoProgress);
    video.addEventListener('timeupdate', updateVideoProgress);
    video.addEventListener('seeked', updateVideoProgress);
    video.addEventListener('progress', updateVideoProgress);
    video.addEventListener('canplay', () => { sourceReady = true; if (empty) empty.classList.add('hidden'); updateVideoProgress(); });
    video.addEventListener('error', () => { sourceReady = false; if (empty) empty.classList.remove('hidden'); showState(videoLabels[currentLanguage].add); updateVideoProgress(); });
    video.addEventListener('play', () => { if (play) play.textContent = videoLabels[currentLanguage].pause; if (empty) empty.classList.add('hidden'); showState(videoLabels[currentLanguage].playing); refreshVideoLabels(); });
    video.addEventListener('pause', () => { if (play) play.textContent = videoLabels[currentLanguage].play; if (sourceReady && !video.ended) showState(videoLabels[currentLanguage].paused); refreshVideoLabels(); });
    video.addEventListener('ended', () => { if (play) play.textContent = videoLabels[currentLanguage].play; showState(videoLabels[currentLanguage].ended); updateVideoProgress(); });
    // A tap/click on the video surface itself toggles play/pause; custom buttons remain separate.
    video.addEventListener('click', (event) => {
      if (video.webkitDisplayingFullscreen) return;
      event.preventDefault();
      togglePlayback();
    });
    play?.addEventListener('click', (event) => { event.preventDefault(); togglePlayback(); });
    mute?.addEventListener('click', (event) => {
      event.preventDefault(); attachSource(); video.muted = !video.muted; refreshVideoLabels();
    });
    if (videoProgressInput) {
      videoProgressInput.addEventListener('pointerdown', () => { isSeekingVideo = true; }, { passive: true });
      videoProgressInput.addEventListener('touchstart', () => { isSeekingVideo = true; }, { passive: true });
      videoProgressInput.addEventListener('input', () => {
        isSeekingVideo = true;
        updateSeekVisual(videoProgressInput.value);
      });
      videoProgressInput.addEventListener('change', commitSeek);
      videoProgressInput.addEventListener('pointerup', commitSeek, { passive: true });
      videoProgressInput.addEventListener('pointercancel', commitSeek, { passive: true });
      videoProgressInput.addEventListener('touchend', commitSeek, { passive: true });
      videoProgressInput.addEventListener('keydown', (event) => {
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) isSeekingVideo = true;
      });
      videoProgressInput.addEventListener('keyup', commitSeek);
    }
    fullscreen?.addEventListener('click', (event) => { event.preventDefault(); enterFullscreen(); });
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && fallbackFullscreen) exitFallbackFullscreen();
      refreshVideoLabels();
    });
    video.addEventListener('webkitbeginfullscreen', () => { video.controls = true; refreshVideoLabels(); });
    video.addEventListener('webkitendfullscreen', () => { video.controls = false; refreshVideoLabels(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && fallbackFullscreen) exitFallbackFullscreen(); });
    const section = videoFrame || $('#demo-video');
    if (section && 'IntersectionObserver' in window) {
      // Load metadata near the section without autoplay; playback always follows an explicit user action.
      const preloadObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) { attachSource(); preloadObserver.disconnect(); }
      }, { rootMargin: '350px 0px', threshold: 0 });
      preloadObserver.observe(section);
    }
    // Also make seeking available before metadata if the user taps the progress bar first.
    updateVideoProgress();
  }

  // Reusable image lightbox on both pages (screenshots, comparison graphic and founder photo).
  const lightbox = $('#lightbox');
  if (lightbox) {
    const buttons = $$('button[data-full]'), image = $('img', lightbox), count = $('.lightbox-count', lightbox);
    let index = 0;
    const render = () => {
      const button = buttons[index]; if (!button) return;
      image.src = button.dataset.full;
      image.alt = $('img', button)?.alt || 'Expanded project image';
      if (count) count.textContent = `${index + 1} / ${buttons.length}`;
    };
    const open = (i) => { index = i; render(); lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('.lightbox-close', lightbox)?.focus(); };
    const close = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
    buttons.forEach((button, i) => button.addEventListener('click', () => open(i)));
    $('.lightbox-close', lightbox)?.addEventListener('click', close);
    $('.lightbox-prev', lightbox)?.addEventListener('click', () => { index = (index - 1 + buttons.length) % buttons.length; render(); });
    $('.lightbox-next', lightbox)?.addEventListener('click', () => { index = (index + 1) % buttons.length; render(); });
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') { index = (index - 1 + buttons.length) % buttons.length; render(); }
      if (event.key === 'ArrowRight') { index = (index + 1) % buttons.length; render(); }
    });
  }

  // Interactive lower-right emblem. Movement adds rotational momentum, then a spring returns it upright.
  const emblem = $('.floating-emblem');
  if (emblem) {
    let angle = 0, velocity = 0, frame = 0, lastX = 0, lastY = 0, lastTime = 0;
    const normalizeAngle = (value) => ((value + 180) % 360 + 360) % 360 - 180;
    const draw = (scale = 1) => { emblem.style.transform = `rotate(${angle.toFixed(1)}deg) scale(${scale.toFixed(3)})`; };
    const animate = () => {
      // A damped restoring force removes the accumulated angle instead of leaving the badge upside down.
      const homeDelta = normalizeAngle(-angle);
      velocity = velocity * 0.86 + homeDelta * 0.035;
      angle = normalizeAngle(angle + velocity);
      draw(1 + Math.min(0.055, Math.abs(velocity) / 220));
      if (Math.abs(angle) < 1.2 && Math.abs(velocity) < 0.24) {
        angle = 0; velocity = 0; frame = 0; draw(1); return;
      }
      frame = requestAnimationFrame(animate);
    };
    const startMotion = () => { if (!frame) frame = requestAnimationFrame(animate); };
    emblem.addEventListener('pointermove', (event) => {
      const now = performance.now();
      if (lastTime) {
        const elapsed = Math.max(8, now - lastTime);
        const dx = event.clientX - lastX, dy = event.clientY - lastY;
        const speed = Math.hypot(dx, dy) / elapsed;
        const direction = Math.sign(dx - dy) || 1;
        velocity = Math.max(-22, Math.min(22, velocity + direction * Math.min(6, 0.7 + speed * 2.4)));
        angle = normalizeAngle(angle + direction * Math.min(6, 0.6 + speed * 1.6));
        draw(1.045); startMotion();
      }
      lastX = event.clientX; lastY = event.clientY; lastTime = now;
    }, { passive: true });
    emblem.addEventListener('pointerleave', () => { lastTime = 0; startMotion(); });
    const emblemModal = $('#emblem-modal');
    let emblemModalTimer = 0;
    const closeEmblemModal = () => {
      if (!emblemModal) return;
      window.clearTimeout(emblemModalTimer);
      emblemModal.classList.remove('is-open');
      emblemModal.setAttribute('aria-hidden', 'true');
      try { emblem.focus({ preventScroll: true }); } catch (_) { emblem.focus(); }
    };
    const openEmblemModal = () => {
      if (!emblemModal) return;
      window.clearTimeout(emblemModalTimer);
      emblemModal.classList.add('is-open');
      emblemModal.setAttribute('aria-hidden', 'false');
      $('.emblem-modal-close', emblemModal)?.focus({ preventScroll: true });
      emblemModalTimer = window.setTimeout(closeEmblemModal, 3000);
    };
    emblem.addEventListener('click', () => { velocity += angle >= 0 ? 10 : -10; startMotion(); openEmblemModal(); });
    $$('[data-emblem-close]').forEach((el) => el.addEventListener('click', closeEmblemModal));
    $('.emblem-modal-close', emblemModal || document)?.addEventListener('click', closeEmblemModal);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && emblemModal?.classList.contains('is-open')) closeEmblemModal(); });
  }

  // Hide fixed controls while the footer is visible so they never cover the creator credit or rights notice.
  const footer = $('.site-footer');
  if (footer && 'IntersectionObserver' in window) {
    const footerObserver = new IntersectionObserver((entries) => {
      document.body.classList.toggle('footer-visible', entries.some((entry) => entry.isIntersecting));
    }, { root: null, threshold: 0.01 });
    footerObserver.observe(footer);
  }

  // Ambient particles: capped canvas resolution/frame rate, reduced particle count, and no RAF loop while hidden.
  const canvas = $('#ambient-canvas');
  if (canvas && canvas.getContext) {
    const context = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (context) {
      let width = 0, height = 0, raf = 0, particles = [], lastDraw = 0;
      const pointer = { x: -9999, y: -9999, active: false };
      const motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
      let reduced = !!motionQuery?.matches;
      const isMobile = () => window.innerWidth < 680;
      const particleCount = () => isMobile() ? 12 : Math.min(28, Math.max(18, Math.floor(window.innerWidth / 52)));
      const pixelRatio = () => Math.min(window.devicePixelRatio || 1, 1.25, Math.sqrt(1800000 / Math.max(1, window.innerWidth * window.innerHeight)));
      function resize() {
        width = window.innerWidth; height = window.innerHeight;
        const ratio = pixelRatio();
        canvas.width = Math.max(1, Math.floor(width * ratio)); canvas.height = Math.max(1, Math.floor(height * ratio));
        canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        const count = particleCount();
        particles = Array.from({ length: count }, (_, i) => ({
          x: Math.random() * width, y: Math.random() * height,
          vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .15,
          r: i % 4 === 0 ? 1.7 + Math.random() * .8 : .7 + Math.random() * .8,
          gold: i % 4 === 0, phase: Math.random() * Math.PI * 2
        }));
        if (reduced) drawFrame(0, true);
      }
      function movePointer(event) { pointer.x = event.clientX; pointer.y = event.clientY; pointer.active = true; }
      window.addEventListener('pointermove', movePointer, { passive: true });
      window.addEventListener('pointerleave', () => { pointer.active = false; }, { passive: true });
      window.addEventListener('touchmove', (event) => { if (event.touches[0]) { pointer.x = event.touches[0].clientX; pointer.y = event.touches[0].clientY; pointer.active = true; } }, { passive: true });
      window.addEventListener('resize', resize, { passive: true });
      function drawFrame(time, staticFrame = false) {
        if (!context || document.visibilityState === 'hidden') return;
        if (!staticFrame && (reduced || time - lastDraw < (isMobile() ? 64 : 42))) {
          if (!reduced) raf = requestAnimationFrame(drawFrame);
          return;
        }
        lastDraw = time;
        context.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          let hot = false;
          if (!staticFrame && pointer.active) {
            const dx = p.x - pointer.x, dy = p.y - pointer.y, dist = Math.hypot(dx, dy);
            if (dist < (isMobile() ? 90 : 120)) {
              hot = true;
              const strength = (1 - dist / (isMobile() ? 90 : 120));
              p.vx += (dx / (dist || 1)) * strength * (p.gold ? .035 : .014);
              p.vy += (dy / (dist || 1)) * strength * (p.gold ? .035 : .014);
            }
          }
          if (!staticFrame) {
            const max = p.gold ? .38 : .22;
            p.vx = Math.max(-max, Math.min(max, p.vx * .992));
            p.vy = Math.max(-max, Math.min(max, p.vy * .992));
            p.x += p.vx; p.y += p.vy;
            if (p.x < -8) p.x = width + 8; if (p.x > width + 8) p.x = -8;
            if (p.y < -8) p.y = height + 8; if (p.y > height + 8) p.y = -8;
          }
          const pulse = staticFrame ? .5 : .5 + .5 * Math.sin(time * .00065 + p.phase);
          if (p.gold) {
            context.beginPath(); context.arc(p.x, p.y, p.r + (hot ? 1.4 : pulse * .45), 0, Math.PI * 2);
            context.fillStyle = hot ? 'rgba(255,230,164,.98)' : `rgba(226,194,111,${.36 + pulse * .35})`;
            context.shadowColor = hot ? 'rgba(255,217,126,.95)' : 'rgba(214,189,120,.32)'; context.shadowBlur = hot ? 15 : 5;
            context.fill(); context.shadowBlur = 0;
          } else {
            context.beginPath(); context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            context.fillStyle = `rgba(71,205,139,${.16 + pulse * .23})`; context.fill();
          }
        });
        // Fine green connections are limited to a modest particle count to keep mobile rendering inexpensive.
        for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j], dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
          if (dist < 104) {
            let alpha = .075 * (1 - dist / 104);
            if (pointer.active && Math.hypot((a.x+b.x)/2-pointer.x, (a.y+b.y)/2-pointer.y) < 112) alpha *= 2.2;
            context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(64,210,137,${alpha})`; context.lineWidth = .65; context.stroke();
          }
        }
        if (!staticFrame && !reduced && document.visibilityState === 'visible') raf = requestAnimationFrame(drawFrame);
      }
      function startAnimation() {
        if (document.visibilityState !== 'visible') return;
        if (reduced) { drawFrame(0, true); return; }
        if (!raf) raf = requestAnimationFrame(drawFrame);
      }
      function stopAnimation() { if (raf) cancelAnimationFrame(raf); raf = 0; }
      resize();
      if (!reduced) startAnimation(); else drawFrame(0, true);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') startAnimation(); else stopAnimation();
      });
      if (motionQuery?.addEventListener) motionQuery.addEventListener('change', (event) => {
        reduced = event.matches;
        stopAnimation();
        if (reduced) drawFrame(0, true); else startAnimation();
      });
    }
  }

  // Two-second logo intro with gold rings.
  const loader = $('#site-loader');
  if (loader) window.setTimeout(() => loader.classList.add('loader-done'), 1600);

  // About-page storytelling: the visible video follows page scroll in both directions.
  // Portrait screens use the portrait clip; landscape screens use the companion landscape clip.
  // Neither video is played automatically: scrolling seeks to the corresponding frame.
  const storyPortraitVideo = $('#story-background-video-portrait');
  const storyLandscapeVideo = $('#story-background-video-landscape');
  if (storyPortraitVideo && storyLandscapeVideo) {
    const landscapeQuery = window.matchMedia('(min-aspect-ratio: 4/5)');
    const storyVideos = [storyPortraitVideo, storyLandscapeVideo];
    let targetStoryProgress = 0;
    let storySeekRaf = 0;
    let lastStorySeekAt = 0;
    const activeStoryVideo = () => landscapeQuery.matches ? storyLandscapeVideo : storyPortraitVideo;
    const seekStoryVideo = () => {
      storySeekRaf = 0;
      if (document.visibilityState !== 'visible') return;
      const video = activeStoryVideo();
      if (!video || video.readyState < 1 || !Number.isFinite(video.duration)) return;
      if (video.seeking) return;
      const now = performance.now();
      // Limit random frame seeks on mobile while retaining the latest scroll position.
      if (now - lastStorySeekAt < 36) {
        storySeekRaf = requestAnimationFrame(seekStoryVideo);
        return;
      }
      const safeDuration = Math.max(0, video.duration - (1 / 60));
      const next = Math.max(0, Math.min(safeDuration, safeDuration * targetStoryProgress));
      if (Math.abs(video.currentTime - next) > (1 / 48)) {
        try {
          video.currentTime = next;
          lastStorySeekAt = now;
        } catch (_) { /* Keep the current frame if seeking is not supported yet. */ }
      }
    };
    const queueStorySeek = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetStoryProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      const active = activeStoryVideo();
      if (active && active.readyState >= 1 && !storySeekRaf) storySeekRaf = requestAnimationFrame(seekStoryVideo);
    };
    storyVideos.forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.pause();
      video.addEventListener('loadedmetadata', queueStorySeek);
      video.addEventListener('seeked', () => {
        const active = activeStoryVideo();
        if (active === video && Math.abs(video.currentTime - Math.max(0, video.duration - (1 / 60)) * targetStoryProgress) > (1 / 48)) queueStorySeek();
      });
      video.addEventListener('error', () => {
        const active = activeStoryVideo();
        if (active === video) {
          const layer = $('.about-video-layer');
          if (layer) layer.classList.add('video-fallback');
        }
      });
    });
    window.addEventListener('scroll', queueStorySeek, { passive: true });
    window.addEventListener('resize', queueStorySeek, { passive: true });
    window.addEventListener('pageshow', queueStorySeek, { passive: true });
    window.addEventListener('pagehide', () => storyVideos.forEach((video) => video.pause()), { passive: true });
    if (landscapeQuery.addEventListener) landscapeQuery.addEventListener('change', queueStorySeek);
    else if (landscapeQuery.addListener) landscapeQuery.addListener(queueStorySeek);
    $$('[data-lang]').forEach((button) => button.addEventListener('click', () => window.setTimeout(queueStorySeek, 80)));
    queueStorySeek();
  }

  // Lightweight deterrent against casual copying. It cannot prevent screenshots or source access.
  document.addEventListener('contextmenu', (event) => {
    if (event.target.closest('img, .feature-figure, .shot-image, .floating-emblem')) event.preventDefault();
  });
  document.addEventListener('dragstart', (event) => { if (event.target.closest('img, .feature-figure, .shot-image')) event.preventDefault(); });
  document.addEventListener('copy', (event) => {
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (window.getSelection && String(window.getSelection()).trim()) event.preventDefault();
  });
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const devtoolsCombo = event.key === 'F12' || ((event.ctrlKey || event.metaKey) && event.shiftKey && ['i','j','c'].includes(key));
    const sourceCombo = (event.ctrlKey || event.metaKey) && !event.shiftKey && ['u','s','c','x'].includes(key);
    if (devtoolsCombo || sourceCombo) event.preventDefault();
  });
})();
