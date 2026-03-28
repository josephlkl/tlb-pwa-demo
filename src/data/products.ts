export type SolutionFamily = {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  sourcePageUrl: string;
};

export type Product = {
  slug: string;
  name: string;
  family: SolutionFamily['id'];
  summary: string;
  detailText: string;
  heroImageUrl: string;
  sourcePageUrl: string;
  issuingLocations: Array<{
    label: string;
    detailPageUrl: string;
  }>;
  brochures: Array<{
    label: string;
    url: string;
  }>;
};

const tlb = 'https://www.transamericalifebermuda.com';

export const solutionFamilies: SolutionFamily[] = [
  {
    id: 'term-life',
    name: 'Term Life',
    tagline: 'Protection for fixed terms with lower premiums.',
    summary:
      'Focused on guaranteed life protection benefits for a chosen duration and positioned as a cost-effective way to strengthen coverage.',
    sourcePageUrl:
      'https://www.transamericalifebermuda.com/en/our-insurance-solutions/term-life'
  },
  {
    id: 'universal-life',
    name: 'Universal Life',
    tagline: 'Lifetime coverage with savings and premium flexibility.',
    summary:
      'Whole life insurance with life protection plus savings and the flexibility to adjust premiums and access value while the policy is in force.',
    sourcePageUrl:
      'https://www.transamericalifebermuda.com/en/our-insurance-solutions/universal-life'
  },
  {
    id: 'indexed-universal-life',
    name: 'Indexed Universal Life',
    tagline: 'Lifetime coverage with index-linked upside potential.',
    summary:
      'A variation of universal life that adds index-linked growth potential together with downside protection and multiple tracking options.',
    sourcePageUrl:
      'https://www.transamericalifebermuda.com/en/our-insurance-solutions/indexed-universal-life'
  },
  {
    id: 'indexed-savings',
    name: 'Indexed Savings',
    tagline: 'Savings-led indexed coverage with downside protection.',
    summary:
      'A savings-oriented indexed solution with lower life protection weighting, long-term wealth growth focus, and simplified application positioning.',
    sourcePageUrl:
      'https://www.transamericalifebermuda.com/en/our-insurance-solutions/indexed-savings'
  }
];

export const products: Product[] = [
  {
    slug: 'trendsetter-ultra',
    name: 'Trendsetter Ultra',
    family: 'term-life',
    summary:
      'A term life insurance solution that provides optimised protection levels for affluent and high-net-worth individuals.',
    detailText:
      'Trendsetter Ultra is a term life insurance solution that provides optimised protection levels to meet the needs of affluent and high-net-worth individuals.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-02/Happy_middle-aged_lady_driving_in_car_1.jpg?itok=L3GKkUAp`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/term-life`,
    issuingLocations: [
      {
        label: 'Bermuda (Global ex Asia)',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/trendsetter-ultra-bermuda-global-ex-asia-detail`
      },
      {
        label: 'Hong Kong',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/trendsetter-ultra-hong-kong-detail`
      },
      {
        label: 'Singapore',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/trendsetter-ultra-singapore-detail`
      }
    ],
    brochures: [
      {
        label: 'Bermuda Product Summary',
        url: `${tlb}/sites/default/files/2025-11/Trendsetter_BM_Product%20Summary_Eng_2.pdf`
      },
      {
        label: 'Hong Kong Product Summary',
        url: `${tlb}/sites/default/files/2025-11/Trendsetter_HK_Product%20Summary_Eng_1.pdf`
      },
      {
        label: 'Singapore Product Summary',
        url: `${tlb}/sites/default/files/2026-03/Trendsetter_SG_Product%20Summary_Eng_2.pdf`
      }
    ]
  },
  {
    slug: 'universal-life-alpha-pro',
    name: 'Universal Life Alpha Pro',
    family: 'universal-life',
    summary:
      'Flexible premium universal life insurance plans that support estate or business planning with life protection and wealth accumulation options.',
    detailText:
      'Universal Life Alpha Pro products are flexible premium universal life insurance plans that support your estate or business planning with life protection as well as wealth accumulation and preservation options.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-02/Horse_riding_on_the_beach_at_sunset%20%282%29.jpg?itok=vhvaGIdq`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/universal-life`,
    issuingLocations: [
      {
        label: 'Bermuda (Global ex Asia)',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/universal-life-alpha-pro-universal-life-alpha-pro-century-bermuda-global-ex-asia-detail`
      },
      {
        label: 'Hong Kong',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/universal-life-alpha-pro-universal-life-alpha-pro-century-hong-kong-detail`
      },
      {
        label: 'Singapore',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/universal-life-alpha-pro-universal-life-alpha-pro-century-singapore-detail`
      }
    ],
    brochures: [
      {
        label: 'Bermuda Product Summary',
        url: `${tlb}/sites/default/files/2025-10/ULAP_BM_Product%20Summary_Eng_0.pdf`
      },
      {
        label: 'Hong Kong Product Summary',
        url: `${tlb}/sites/default/files/2025-10/ULAP_HK_Product%20Summary_Eng_0.pdf`
      },
      {
        label: 'Singapore Product Summary',
        url: `${tlb}/sites/default/files/2025-10/ULAP_SG_Product%20Summary_Eng_0.pdf`
      }
    ]
  },
  {
    slug: 'genesis-plus-indexed-universal-life-2',
    name: 'Genesis+ Indexed Universal Life 2',
    family: 'indexed-universal-life',
    summary:
      'Combines lifetime protection with policy growth opportunity through a distinctive index account structure.',
    detailText:
      'Genesis+ Indexed Universal Life 2 combines lifetime protection with the opportunity for policy growth based on its distinctive Index Account, insuring what matters most to you, whether that means security for your family, protection for your business, or support for your succession planning goals. It is designed to enhance your wealth while safeguarding your personal worth and preserving a lasting legacy for generations to come.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-04/Happy_couple_talking_to_helicoper_pilot%20%282%29.jpg?itok=aKMHL2dZ`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/indexed-universal-life`,
    issuingLocations: [
      {
        label: 'Bermuda (Global ex Asia)',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/genesis-indexed-universal-life-2-bermuda-global-ex-asia-detail`
      }
    ],
    brochures: [
      {
        label: 'Bermuda Product Summary',
        url: `${tlb}/sites/default/files/2025-09/Genesis%2B%20Indexed%20Universal%20Life%202_Product%20Summary_1.pdf`
      }
    ]
  },
  {
    slug: 'opus-one-indexed-universal-life',
    name: 'Opus One Indexed Universal Life',
    family: 'indexed-universal-life',
    summary:
      'Offers lifetime protection, downside protection, and growth potential through a fixed account and index account structure.',
    detailText:
      'Opus One Indexed Universal Life, available for Professional Investor only, offers lifetime protection that safeguards your personal wealth and preserves a lasting legacy for generations to come. It is also a valuable addition to high-net-worth customers overall wealth management strategy, offering protection against market volatility while providing attractive growth potential through its distinctive structure of a Fixed Account and Index Account.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-08/Golf.jpg?itok=2K0DBDsA`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/indexed-universal-life`,
    issuingLocations: [
      {
        label: 'Hong Kong',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/opus-one-indexed-universal-life-hong-kong-detail`
      }
    ],
    brochures: [
      {
        label: 'Hong Kong Product Summary',
        url: `${tlb}/sites/default/files/2025-08/Opus%20One%20IUL_Product%20Summary_Eng_0.pdf`
      }
    ]
  },
  {
    slug: 'genesis-iii-indexed-universal-life',
    name: 'Genesis III Indexed Universal Life',
    family: 'indexed-universal-life',
    summary:
      'Combines lifetime protection and policy growth opportunity through an index account for Singapore clients.',
    detailText:
      'Genesis III Indexed Universal Life combines lifetime protection with the opportunity for policy growth based on its distinctive Index Account, insuring what matters most to you, whether that is security for your family, protection for your business, or support for your succession planning goals. This indexed universal life plan is designed to enhance your wealth while safeguarding your personal worth and preserving a lasting legacy for generations to come.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-04/Couple_relaxing_by_pool_cabana%20%20%282%29.jpg?itok=yRbbIj89`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/indexed-universal-life`,
    issuingLocations: [
      {
        label: 'Singapore',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/genesis-ii-indexed-universal-life-singapore-detail`
      }
    ],
    brochures: [
      {
        label: 'Singapore Product Summary',
        url: `${tlb}/sites/default/files/2025-09/Genesis%20III%20Indexed%20Universal%20Life_Product%20Summary_2.pdf`
      }
    ]
  },
  {
    slug: 'prospera-flexigrowth-indexed-savings',
    name: 'Prospera FlexiGrowth Indexed Savings',
    family: 'indexed-savings',
    summary:
      'A savings-oriented indexed universal life plan designed for long-term growth with protection against market volatility.',
    detailText:
      'Prospera FlexiGrowth Indexed Savings is a savings-oriented indexed universal life insurance plan designed for long-term growth while providing flexibility. It offers growth potential with protection against market volatility through its distinctive Index Account structure. Prospera FlexiGrowth helps you achieve what matters most to you, whether it is growing legacies, safeguarding wealth, supporting succession plans, or fulfilling business purposes.',
    heroImageUrl:
      `${tlb}/sites/default/files/styles/card_image_600_350/public/2025-04/Son_giving_his_mom_a_kiss%20%282%29.jpg?itok=U4eDbuCO`,
    sourcePageUrl: `${tlb}/en/our-insurance-solutions/indexed-savings`,
    issuingLocations: [
      {
        label: 'Bermuda (Global ex Asia)',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/prosperatm-flexigrowth-indexed-savings-bermuda-global-ex-asia-detail`
      },
      {
        label: 'Singapore',
        detailPageUrl: `${tlb}/en/our-insurance-solutions/prosperatm-flexigrowth-indexed-savings-singapore-detail`
      }
    ],
    brochures: [
      {
        label: 'Bermuda Product Summary',
        url: `${tlb}/sites/default/files/2025-10/Prospera_BM_Product%20Summary_Eng_1.pdf`
      },
      {
        label: 'Singapore Product Summary',
        url: `${tlb}/sites/default/files/2025-10/Prospera_SG_Product%20Summary_Eng_1.pdf`
      }
    ]
  }
];
