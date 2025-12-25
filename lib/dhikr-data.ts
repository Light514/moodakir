export interface DhikrData {
  id: string;
  arabic: string;
  transliteration?: string;
  translations: {
    en: string;
    fr: string;
  };
  benefits: {
    en: string;
    fr: string;
    ar: string;
  };
  target?: number;
  category: 'morning' | 'evening' | 'general' | 'salat';
}

export const dhikrPresets: DhikrData[] = [
  {
    id: 'subhanallah-wa-bihamdihi',
    arabic: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
    transliteration: 'SubhanAllah wa bihamdihi',
    translations: {
      en: 'Glory and praise to Allah',
      fr: 'Gloire et louange à Allah',
    },
    benefits: {
      en: 'A palm tree planted in Paradise for each recitation',
      fr: 'Un palmier planté au Paradis pour chaque récitation',
      ar: 'شجرة في الجنة لكل تسبيحة',
    },
    target: 100,
    category: 'general',
  },
  {
    id: 'la-ilaha-illa-llah',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'La ilaha illa Llah wahdahu la sharika lahu lahu-l-mulku wa lahu-l-hamdu wa huwa \'ala kulli shay\'in qadir',
    translations: {
      en: 'None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is capable of all things',
      fr: 'Nulle divinité digne d\'adoration sauf Allah, Seul sans associé. À Lui la royauté et la louange, Il est capable de toute chose',
    },
    benefits: {
      en: 'Equivalent to freeing 10 slaves',
      fr: 'Équivaut à affranchir 10 esclaves',
      ar: 'كعتق عشر رقاب',
    },
    target: 100,
    category: 'morning',
  },
  {
    id: 'astaghfirullah',
    arabic: 'أَسْتَغْفِرُ اللّٰهَ',
    transliteration: 'Astaghfirullah',
    translations: {
      en: 'I seek forgiveness from Allah',
      fr: 'Je demande pardon à Allah',
    },
    benefits: {
      en: 'Opens doors of provision and removes distress',
      fr: 'Ouvre les portes de subsistance et dissipe l\'angoisse',
      ar: 'يفتح أبواب الرزق ويزيل الهم',
    },
    category: 'general',
  },
  {
    id: 'astaghfirullah-wa-atubu-ilayh',
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullah wa atubu ilayh',
    translations: {
      en: 'I seek forgiveness from Allah and repent to Him',
      fr: 'Je demande pardon à Allah et je me repens à Lui',
    },
    benefits: {
      en: 'The Prophet ﷺ sought forgiveness more than 70 times daily',
      fr: 'Le Prophète ﷺ demandait pardon plus de 70 fois par jour',
      ar: 'كان النبي ﷺ يستغفر أكثر من سبعين مرة في اليوم',
    },
    target: 70,
    category: 'general',
  },
  {
    id: 'salawat',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',
    transliteration: 'Allahumma salli \'ala Muhammad',
    translations: {
      en: 'O Allah, send prayers upon Muhammad',
      fr: 'Ô Allah, prie sur Muhammad',
    },
    benefits: {
      en: 'Allah sends blessings 10 times upon who sends blessings once upon the Prophet ﷺ',
      fr: 'Allah prie 10 fois sur celui qui prie une fois sur le Prophète ﷺ',
      ar: 'من صلى علي مرة صلى الله عليه عشرا',
    },
    category: 'general',
  },
  {
    id: 'subhanallah',
    arabic: 'سُبْحَانَ اللهِ',
    transliteration: 'SubhanAllah',
    translations: {
      en: 'Glory to Allah',
      fr: 'Gloire à Allah',
    },
    benefits: {
      en: 'Light in the balance on Judgment Day',
      fr: 'Lumière dans la balance au Jour du Jugement',
      ar: 'نور في الميزان يوم القيامة',
    },
    target: 33,
    category: 'salat',
  },
  {
    id: 'alhamdulillah',
    arabic: 'ٱلْحَمْدُ لِلّٰهِ',
    transliteration: 'Alhamdulillah',
    translations: {
      en: 'All praise to Allah',
      fr: 'Louange à Allah',
    },
    benefits: {
      en: 'Fills the scales of good deeds',
      fr: 'Remplit les plateaux des bonnes actions',
      ar: 'تملأ الميزان',
    },
    target: 33,
    category: 'salat',
  },
];
