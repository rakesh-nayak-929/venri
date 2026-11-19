import { LanguageCode } from '../types';

export interface TranslationBundle {
  languageLabel: string;
  sampleNotice: string;
  nav: {
    home: string;
    appliances: string;
    tutorials: string;
    safety: string;
    maintenance: string;
    about: string;
    login: string;
    dashboard: string;
    admin: string;
    logout: string;
    searchPlaceholder: string;
  };
  hero: {
    heading: string;
    subtitle: string;
    exploreBtn: string;
    startBtn: string;
    statAppliances: string;
    statTutorials: string;
    statLanguages: string;
    statReminders: string;
  };
  sections: {
    popularAppliances: string;
    popularAppliancesSub: string;
    exploreAppliance: string;
    whyChooseTitle: string;
    whyChooseSub: string;
    howWorksTitle: string;
    howWorksSub: string;
    featuredTutorialsTitle: string;
    featuredTutorialsSub: string;
    readTutorial: string;
    viewAllTutorials: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  whyChooseItems: {
    title: string;
    desc: string;
  }[];
  howItWorksSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  pages: {
    safetyTitle: string;
    safetyNotice: string;
    maintenanceTitle: string;
    maintenanceSub: string;
    addTask: string;
    aboutTitle: string;
    contactTitle: string;
  };
  footer: {
    tagline: string;
    aboutUs: string;
    exploreAppliances: string;
    tutorials: string;
    safetyGuidelines: string;
    contactUs: string;
    privacyPolicy: string;
    terms: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationBundle> = {
  en: {
    languageLabel: 'English',
    sampleNotice: '',
    nav: {
      home: 'Home',
      appliances: 'Appliances',
      tutorials: 'Tutorials',
      safety: 'Safety',
      maintenance: 'Maintenance',
      about: 'About Us',
      login: 'Sign In',
      dashboard: 'Dashboard',
      admin: 'Admin',
      logout: 'Sign Out',
      searchPlaceholder: 'Search appliances, tutorials, safety, or problems...',
    },
    hero: {
      heading: 'Make Your Home Smarter with VENRI.',
      subtitle:
        'Learn to use your home appliances correctly, safely and efficiently through simple tutorials and practical guidance.',
      exploreBtn: 'Explore Appliances',
      startBtn: 'Start Learning',
      statAppliances: '6 Core Appliances',
      statTutorials: '18 Guided Tutorials',
      statLanguages: '3 Languages',
      statReminders: 'Care Reminders',
    },
    sections: {
      popularAppliances: 'Popular Appliance Categories',
      popularAppliancesSub:
        'Select any household appliance to explore its parts, safe operation steps, settings, cleaning routines, and troubleshooting.',
      exploreAppliance: 'Explore',
      whyChooseTitle: 'Why Choose VENRI?',
      whyChooseSub:
        'Everything families and first-time appliance users need in one structured, easy-to-follow platform.',
      howWorksTitle: 'How VENRI Works',
      howWorksSub: 'Four simple steps from unboxing confusion to confident daily operation.',
      featuredTutorialsTitle: 'Featured Tutorials',
      featuredTutorialsSub:
        'Clear, jargon-free walkthroughs built for everyday home routines.',
      readTutorial: 'Read Tutorial',
      viewAllTutorials: 'View All Tutorials',
      ctaTitle: 'Confused About Your Appliance? VENRI Makes It Simple.',
      ctaSubtitle:
        'Browse step-by-step guides, check safety rules, or set up maintenance reminders for your home in minutes.',
      ctaButton: 'Start Exploring',
    },
    whyChooseItems: [
      {
        title: 'Easy Step-by-Step Tutorials',
        desc: 'Plain-language instructions broken into clear numbered stages anyone in the family can follow.',
      },
      {
        title: 'Video Demonstrations',
        desc: 'Visual walkthrough chapters aligned with every operating step so you know what to expect.',
      },
      {
        title: 'Regional Language Support',
        desc: 'Switch key navigation and guidance interface text between English, Telugu, and Hindi.',
      },
      {
        title: 'Appliance Safety Guidelines',
        desc: 'Dedicated electrical and heat precautions to protect your household and prevent accidental damage.',
      },
      {
        title: 'Energy-Saving Tips',
        desc: 'Practical daily habits that reduce electricity and water waste without sacrificing results.',
      },
      {
        title: 'Maintenance Reminders',
        desc: 'Track filter cleaning, gasket checks, and routine descaling with due-date reminders.',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Select your appliance.',
        desc: 'Choose from six everyday kitchen and laundry appliances.',
      },
      {
        step: '02',
        title: 'Choose what you want to learn.',
        desc: 'Pick getting started, settings, cleaning, safety, or troubleshooting.',
      },
      {
        step: '03',
        title: 'Follow simple instructions.',
        desc: 'Read clear numbered steps and review safety reminders before turning it on.',
      },
      {
        step: '04',
        title: 'Use and maintain your appliance confidently.',
        desc: 'Save favourite guides and schedule routine care reminders.',
      },
    ],
    pages: {
      safetyTitle: 'Appliance Safety Guidelines',
      safetyNotice:
        "Always read the manufacturer's instructions before operating an appliance. Never attempt electrical repairs without qualified assistance.",
      maintenanceTitle: 'Maintenance & Care Reminders',
      maintenanceSub:
        'Schedule routine cleaning and inspection tasks so your household appliances stay safe and last longer.',
      addTask: 'Add Reminder',
      aboutTitle: 'About VENRI',
      contactTitle: 'Contact & Feedback',
    },
    footer: {
      tagline: 'VENRI – Learn Smart, Use Smart, Live Smart.',
      aboutUs: 'About Us',
      exploreAppliances: 'Explore Appliances',
      tutorials: 'Tutorials',
      safetyGuidelines: 'Safety Guidelines',
      contactUs: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      copyright: '© 2026 VENRI. All Rights Reserved.',
    },
  },
  te: {
    languageLabel: 'తెలుగు (Telugu)',
    sampleNotice:
      'Sample Telugu interface translation active for primary navigation, headings, and controls. Detailed tutorial body text remains in English.',
    nav: {
      home: 'హోమ్',
      appliances: 'పరికరాలు',
      tutorials: 'ట్యుటోరియల్స్',
      safety: 'భద్రత',
      maintenance: 'నిర్వహణ',
      about: 'మా గురించి',
      login: 'సైన్ ఇన్',
      dashboard: 'డ్యాష్‌బోర్డ్',
      admin: 'అడ్మిన్',
      logout: 'లాగ్ అవుట్',
      searchPlaceholder: 'పరికరాలు, ట్యుటోరియల్స్ లేదా భద్రతా నియమాలను శోధించండి...',
    },
    hero: {
      heading: 'VENRI తో మీ ఇంటిని మరింత స్మార్ట్‌గా మార్చుకోండి.',
      subtitle:
        'సరళమైన ట్యుటోరియల్స్ మరియు ఆచరణాత్మక మార్గదర్శకత్వం ద్వారా మీ ఇంటి ఉపకరణాలను సరిగ్గా, సురక్షితంగా మరియు సమర్థవంతంగా ఉపయోగించడం నేర్చుకోండి.',
      exploreBtn: 'పరికరాలను చూడండి',
      startBtn: 'నేర్చుకోవడం ప్రారంభించండి',
      statAppliances: '6 ప్రధాన పరికరాలు',
      statTutorials: '18 మార్గదర్శక పాఠాలు',
      statLanguages: '3 భాషలు',
      statReminders: 'నిర్వహణ రిమైండర్లు',
    },
    sections: {
      popularAppliances: 'ప్రముఖ గృహోపకరణాల విభాగాలు',
      popularAppliancesSub:
        'భాగాలు, సురక్షిత వినియోగం, సెట్టింగులు మరియు శుభ్రపరిచే విధానాలను తెలుసుకోవడానికి పరికరాన్ని ఎంచుకోండి.',
      exploreAppliance: 'వివరాలు చూడండి',
      whyChooseTitle: 'VENRI ఎందుకు ఎంచుకోవాలి?',
      whyChooseSub:
        'కుటుంబాలు మరియు కొత్త వినియోగదారులకు అవసరమైన సమాచారం అంతా ఒకే చోట.',
      howWorksTitle: 'VENRI ఎలా పనిచేస్తుంది',
      howWorksSub: 'సులభమైన నాలుగు దశల్లో మీ పరికరాన్ని నమ్మకంగా ఉపయోగించండి.',
      featuredTutorialsTitle: 'ప్రముఖ ట్యుటోరియల్స్',
      featuredTutorialsSub: 'రోజువారీ గృహ అవసరాల కోసం సరళమైన దశలవారీ సూచనలు.',
      readTutorial: 'ట్యుటోరియల్ చదవండి',
      viewAllTutorials: 'అన్ని ట్యుటోరియల్స్ చూడండి',
      ctaTitle: 'మీ పరికరం గురించి సందేహాలు ఉన్నాయా? VENRI దానిని సులభం చేస్తుంది.',
      ctaSubtitle:
        'దశలవారీ మార్గదర్శకాలు, భద్రతా నియమాలు మరియు నిర్వహణ రిమైండర్లను ఇప్పుడే చూడండి.',
      ctaButton: 'అన్వేషణ ప్రారంభించండి',
    },
    whyChooseItems: [
      {
        title: 'సులభమైన దశలవారీ ట్యుటోరియల్స్',
        desc: 'కుటుంబంలో ప్రతి ఒక్కరూ సులభంగా అర్థం చేసుకునేలా సరళమైన భాషలో సూచనలు.',
      },
      {
        title: 'వీడియో ప్రదర్శనలు',
        desc: 'ప్రతి దశను స్పష్టంగా చూపించే నమూనా వీడియో అధ్యాయాలు.',
      },
      {
        title: 'ప్రాంతీయ భాషా సహాయం',
        desc: 'ఇంగ్లీష్, తెలుగు మరియు హిందీ భాషల మధ్య ప్రధాన ఇంటర్‌ఫేస్‌ను మార్చుకోండి.',
      },
      {
        title: 'పరికరాల భద్రతా సూచనలు',
        desc: 'విద్యుత్ మరియు వేడి ప్రమాదాలను నివారించడానికి స్పష్టమైన భద్రతా నియమాలు.',
      },
      {
        title: 'విద్యుత్ ఆదా చిట్కాలు',
        desc: 'రోజువారీ వినియోగంలో విద్యుత్ మరియు నీటిని ఆదా చేసే ఆచరణాత్మక మార్గాలు.',
      },
      {
        title: 'నిర్వహణ రిమైండర్లు',
        desc: 'ఫిల్టర్ క్లీనింగ్ మరియు తనిఖీ తేదీలను సులభంగా గుర్తుంచుకోండి.',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'మీ పరికరాన్ని ఎంచుకోండి.',
        desc: 'ఆరు రోజువారీ వంటగది మరియు లాండ్రీ పరికరాల నుండి ఎంచుకోండి.',
      },
      {
        step: '02',
        title: 'మీరు నేర్చుకోవాలనుకునే అంశాన్ని ఎంచుకోండి.',
        desc: 'ప్రారంభం, సెట్టింగులు, శుభ్రపరచడం, భద్రత లేదా సమస్య పరిష్కారం.',
      },
      {
        step: '03',
        title: 'సరళమైన సూచనలను అనుసరించండి.',
        desc: 'పరికరాన్ని ఆన్ చేసే ముందు దశలవారీ మార్గదర్శకాలు మరియు భద్రతా నియమాలను చదవండి.',
      },
      {
        step: '04',
        title: 'నమ్మకంగా ఉపయోగించండి మరియు నిర్వహించండి.',
        desc: 'ఇష్టమైన గైడ్లను సేవ్ చేయండి మరియు నిర్వహణ రిమైండర్లను సెట్ చేయండి.',
      },
    ],
    pages: {
      safetyTitle: 'పరికరాల భద్రతా నియమాలు',
      safetyNotice:
        'పరికరాన్ని ఉపయోగించే ముందు ఎల్లప్పుడూ తయారీదారు సూచనలను చదవండి. అర్హులైన టెక్నీషియన్ సహాయం లేకుండా విద్యుత్ మరమ్మతులు చేయకండి.',
      maintenanceTitle: 'నిర్వహణ & రిమైండర్లు',
      maintenanceSub:
        'మీ గృహోపకరణాలు సురక్షితంగా ఉండటానికి శుభ్రపరిచే పనులను షెడ్యూల్ చేయండి.',
      addTask: 'రిమైండర్ జోడించండి',
      aboutTitle: 'VENRI గురించి',
      contactTitle: 'సంప్రదింపు & అభిప్రాయం',
    },
    footer: {
      tagline: 'VENRI – స్మార్ట్‌గా నేర్చుకోండి, స్మార్ట్‌గా వాడండి, స్మార్ట్‌గా జీవించండి.',
      aboutUs: 'మా గురించి',
      exploreAppliances: 'పరికరాలు చూడండి',
      tutorials: 'ట్యుటోరియల్స్',
      safetyGuidelines: 'భద్రతా సూచనలు',
      contactUs: 'మమ్మల్ని సంప్రదించండి',
      privacyPolicy: 'గోప్యతా విధానం',
      terms: 'నిబంధనలు మరియు షరతులు',
      copyright: '© 2026 VENRI. సర్వ హక్కులు ప్రత్యేకించబడినవి.',
    },
  },
  hi: {
    languageLabel: 'हिन्दी (Hindi)',
    sampleNotice:
      'Sample Hindi interface translation active for primary navigation, headings, and controls. Detailed tutorial body text remains in English.',
    nav: {
      home: 'होम',
      appliances: 'उपकरण',
      tutorials: 'ट्यूटोरियल',
      safety: 'सुरक्षा',
      maintenance: 'रखरखाव',
      about: 'हमारे बारे में',
      login: 'साइन इन',
      dashboard: 'डैशबोर्ड',
      admin: 'एडमिन',
      logout: 'साइन आउट',
      searchPlaceholder: 'उपकरण, ट्यूटोरियल, सुरक्षा या समस्या खोजें...',
    },
    hero: {
      heading: 'VENRI के साथ अपने घर को स्मार्ट बनाएं।',
      subtitle:
        'सरल ट्यूटोरियल और व्यावहारिक मार्गदर्शन के माध्यम से अपने घरेलू उपकरणों को सही, सुरक्षित और कुशलता से उपयोग करना सीखें।',
      exploreBtn: 'उपकरण देखें',
      startBtn: 'सीखना शुरू करें',
      statAppliances: '6 मुख्य उपकरण',
      statTutorials: '18 गाइडेड ट्यूटोरियल',
      statLanguages: '3 भाषाएँ',
      statReminders: 'केयर रिमाइंडर',
    },
    sections: {
      popularAppliances: 'लोकप्रिय घरेलू उपकरण श्रेणियाँ',
      popularAppliancesSub:
        'उपकरण के हिस्से, सुरक्षित उपयोग, सेटिंग्स, सफाई और समाधान जानने के लिए कोई उपकरण चुनें।',
      exploreAppliance: 'विस्तार से देखें',
      whyChooseTitle: 'VENRI क्यों चुनें?',
      whyChooseSub:
        'परिवारों और नए उपयोगकर्ताओं के लिए सभी आवश्यक जानकारी एक ही सरल मंच पर।',
      howWorksTitle: 'VENRI कैसे काम करता है',
      howWorksSub: 'चार सरल चरणों में अपने घरेलू उपकरण को आत्मविश्वास से चलाएं।',
      featuredTutorialsTitle: 'प्रमुख ट्यूटोरियल',
      featuredTutorialsSub: 'रोज़मर्रा के घरेलू उपयोग के लिए स्पष्ट और सरल मार्गदर्शन।',
      readTutorial: 'ट्यूटोरियल पढ़ें',
      viewAllTutorials: 'सभी ट्यूटोरियल देखें',
      ctaTitle: 'अपने उपकरण को लेकर उलझन में हैं? VENRI इसे आसान बनाता है।',
      ctaSubtitle:
        'स्टेप-बाय-स्टेप गाइड देखें, सुरक्षा नियम जांचें, या कुछ ही मिनटों में रखरखाव रिमाइंडर सेट करें।',
      ctaButton: 'एक्सप्लोर करना शुरू करें',
    },
    whyChooseItems: [
      {
        title: 'आसान स्टेप-बाय-स्टेप ट्यूटोरियल',
        desc: 'सरल भाषा में स्पष्ट चरण जिन्हें परिवार का हर सदस्य आसानी से समझ सके।',
      },
      {
        title: 'वीडियो डेमोंस्ट्रेशन',
        desc: 'हर संचालन चरण के साथ सैंपल वीडियो वॉकथ्रू अध्याय।',
      },
      {
        title: 'क्षेत्रीय भाषा सहायता',
        desc: 'अंग्रेज़ी, तेलुगु और हिन्दी के बीच मुख्य इंटरफ़ेस भाषा बदलें।',
      },
      {
        title: 'उपकरण सुरक्षा दिशानिर्देश',
        desc: 'बिजली और गर्मी से जुड़े खतरों से बचने के लिए जरूरी सुरक्षा नियम।',
      },
      {
        title: 'ऊर्जा बचत के उपाय',
        desc: 'दैनिक उपयोग में बिजली और पानी की बचत करने के व्यावहारिक तरीके।',
      },
      {
        title: 'रखरखाव रिमाइंडर',
        desc: 'फ़िल्टर सफाई, सील जांच और नियमित देखभाल के लिए नियत तारीख के रिमाइंडर।',
      },
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'अपना उपकरण चुनें।',
        desc: 'रसोई और लॉन्ड्री के छह प्रमुख उपकरणों में से चुनें।',
      },
      {
        step: '02',
        title: 'चुनें कि आप क्या सीखना चाहते हैं।',
        desc: 'शुरुआत, सेटिंग्स, सफाई, सुरक्षा या समस्या समाधान में से चुनें।',
      },
      {
        step: '03',
        title: 'सरल निर्देशों का पालन करें।',
        desc: 'उपकरण चालू करने से पहले चरण-दर-चरण निर्देश और सुरक्षा चेतावनी पढ़ें।',
      },
      {
        step: '04',
        title: 'आत्मविश्वास से उपयोग और देखभाल करें।',
        desc: 'पसंदीदा गाइड सहेजें और नियमित रखरखाव रिमाइंडर जोड़ें।',
      },
    ],
    pages: {
      safetyTitle: 'उपकरण सुरक्षा दिशानिर्देश',
      safetyNotice:
        'किसी भी उपकरण को चलाने से पहले हमेशा निर्माता के निर्देश पढ़ें। योग्य तकनीशियन की सहायता के बिना कभी भी बिजली की मरम्मत करने का प्रयास न करें।',
      maintenanceTitle: 'रखरखाव और देखभाल रिमाइंडर',
      maintenanceSub:
        'नियमित सफाई और जांच कार्यों को शेड्यूल करें ताकि आपके उपकरण सुरक्षित रहें।',
      addTask: 'रिमाइंडर जोड़ें',
      aboutTitle: 'VENRI के बारे में',
      contactTitle: 'संपर्क और सुझाव',
    },
    footer: {
      tagline: 'VENRI – स्मार्ट सीखें, स्मार्ट उपयोग करें, स्मार्ट जिएं।',
      aboutUs: 'हमारे बारे में',
      exploreAppliances: 'उपकरण देखें',
      tutorials: 'ट्यूटोरियल',
      safetyGuidelines: 'सुरक्षा दिशानिर्देश',
      contactUs: 'संपर्क करें',
      privacyPolicy: 'गोपनीयता नीति',
      terms: 'नियम और शर्तें',
      copyright: '© 2026 VENRI. सर्वाधिकार सुरक्षित।',
    },
  },
};
