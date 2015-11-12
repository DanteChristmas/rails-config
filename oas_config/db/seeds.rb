# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


###
# Generate AMP Configs
###

amps = AmpConfig.create([
  {
    name: "Kentucky-INT",
    org_type: "school",
    org_code: "kty",
    api_key: 'cce408f86f30ba250e8a66bc587a48ab',
    endpoint_url: 'http://kty-platform-int.silverchalice.co'
  },
  {
    name: "Kentucky-QA",
    org_type: "school",
    org_code: "kty",
    api_key: 'cce408f86f30ba250e8a66bc587a48ab',
    endpoint_url: 'http://kty-platform-qa.silverchalice.co'
  },
  {
    name: "Kentucky-PROD",
    org_type: "school",
    org_code: "kty",
    api_key: 'cce408f86f30ba250e8a66bc587a48ab',
    endpoint_url: 'http://kty-platform.silverchalice.co'
  },
  {
    name: "KState-INT",
    org_type: "school",
    org_code: "ksu",
    api_key: '305ab300fd2ecf8496436f5a208f9ce7',
    endpoint_url: 'http://ksu-platform-int.silverchalice.co'
  },
  {
    name: "KState-QA",
    org_type: "school",
    org_code: "ksu",
    api_key: '305ab300fd2ecf8496436f5a208f9ce7',
    endpoint_url: 'http://ksu-platform-qa.silverchalice.co'
  },
  {
    name: "KState-PROD",
    org_type: "school",
    org_code: "ksu",
    api_key: '305ab300fd2ecf8496436f5a208f9ce7',
    endpoint_url: 'http://ksu-platform.silverchalice.co'
  },
  {
    name: "WCC-INT",
    org_type: "conf",
    org_code: "wcc",
    api_key: '0441c5bfd70a440c3700f97dcc6ab822',
    endpoint_url: 'http://wcc-platform-int.silverchalice.co'
  },
  {
    name: "WCC-QA",
    org_type: "conf",
    org_code: "wcc",
    api_key: '0441c5bfd70a440c3700f97dcc6ab822',
    endpoint_url: 'http://wcc-platform-qa.silverchalice.co'
  },
  {
    name: "WCC-PROD",
    org_type: "conf",
    org_code: "wcc",
    api_key: '0441c5bfd70a440c3700f97dcc6ab822',
    endpoint_url: 'http://wcc-platform-prod.silverchalice.co'
  },
  {
    name: "ACC-INT",
    org_type: "conf",
    org_code: "acc",
    api_key: "5ecca13245515009be26f8c9241f2ea9",
    endpoint_url: "http://platform-int.silverchalice.co"
  },
  {
    name: "ACC-QA",
    org_type: "conf",
    org_code: "acc",
    api_key: "5ecca13245515009be26f8c9241f2ea9",
    endpoint_url: "http://platform-qa.silverchalice.co"
  },
  {
    name: "ACC-PROD",
    org_type: "conf",
    org_code: "acc",
    api_key: "5ecca13245515009be26f8c9241f2ea9",
    endpoint_url: "http://platform.silverchalice.co"
  },
  {
    name: "Mountain West-INT",
    org_type: "conf",
    org_code: "mwc",
    api_key: "d80b10252286ea9ec0b4a780a5453ce7",
    endpoint_url: "http://mwc-platform-int.silverchalice.co"
  },
  {
    name: "Mountain West-QA",
    org_type: "conf",
    org_code: "mwc",
    api_key: "d80b10252286ea9ec0b4a780a5453ce7",
    endpoint_url: "http://mwc-platform-qa.silverchalice.co"
  },
  {
    name: "Mountain West-PROD",
    org_type: "conf",
    org_code: "mwc",
    api_key: "d80b10252286ea9ec0b4a780a5453ce7",
    endpoint_url: "http://mwc-platform.silverchalice.co"
  }
])
###
# Create Accounts
###
accounts = Account.create([
  {
    org_code: 'ksu',
    google_analytics_key: 'UA-63891403-1',
    google_search_key: '009788335473661050134:hxxjv7z2kv4',
    dfp_path_prefix: '/32984737/kstatesports.com',
    ooyala_video_player_id: 'f16b67cc580449909f788b72193c4434',
    ooyala_audio_player_id: 'ae1e1c24539a422d80bfe391dc633eb1',
    ooyala_ad_set_codes: 'ca9d3aa8324f40f08d57b71d5f6784ec',
    platform_name: 'oas-ksu',
    copyright: 'K-State Athletics. All Rights Reserved.',
    publication_name: 'K-State Athletics',
    amp_config_id: amps[3].id,
    facebook_app_id: '/kstatesports',
    institution_twitter_handle: '@kstatesports',
    institution_twitter_string: 'K-State Athletics',
    default_tickets_link: '/page/tickets',
    media_byline: 'K-State Athletics',
    facebook_url: 'https://www.facebook.com/kstatesports',
    twitter_url: 'https://twitter.com/kstatesports',
    instagram_url: 'https://instagram.com/kstatesports',
    youtube_url: 'https://www.youtube.com/user/kstatesports',
    pinterest_url: 'https://www.pinterest.com/kstatesports'
  },
  {
    org_code: 'kty',
    google_analytics_key: 'UA-63883105-1',
    google_search_key: '009788335473661050134:sanf0qj5shm',
    dfp_path_prefix: '/32984737/ukathletics.com',
    ooyala_video_player_id: '879a368e6c8c42bb8a89d9488448b129',
    ooyala_audio_player_id: 'b276c4b6852e4da091226712dc9cd547',
    ooyala_ad_set_codes: '38026308b2a04ae6a708580e345945bf',
    platform_name: 'oas-kty',
    copyright: 'UK Athletics. All Rights Reserved.',
    publication_name: 'UK Athletics',
    amp_config_id: amps[0].id,
    facebook_app_id: '',
    institution_twitter_handle: '',
    institution_twitter_string: 'UK Athletics',
    default_tickets_link: '/page/tickets',
    media_byline: 'UK Athletics',
    facebook_url: 'https://www.facebook.com/UKAthletics',
    twitter_url: 'https://twitter.com/ukathletics',
    instagram_url: 'https://instagram.com/ukathletics',
    youtube_url: 'https://www.youtube.com/user/KentuckyVids',
    pinterest_url: ''
  },
  {
    org_code: 'acc',
    google_analytics_key: 'UA-24979337-4',
    google_search_key: '09788335473661050134:wg945_oltwg',
    dfp_path_prefix: '/32984737/theacc.com',
    ooyala_video_player_id: 'a9d01e5c165b4233998d4fb6b4e0aa34',
    ooyala_audio_player_id: 'd594aa2ea3b840338d5286b4a320aae6',
    ooyala_ad_set_codes: 'ffbeb7d52add409eb2b8e35ab9283dd7',
    platform_name: 'oas-acc',
    copyright: 'Atlantic Coast Conference. All Rights Reserved.',
    publication_name: 'The ACC',
    amp_config_id: amps[9].id,
    facebook_app_id: '',
    institution_twitter_handle: '@theACCDN',
    institution_twitter_string: 'theacc',
    default_tickets_link: '/page/ACC-Tickets',
    media_byline: 'ACC Digital Network',
    facebook_url: 'https://www.facebook.com/theACC',
    twitter_url: 'https://twitter.com/theacc',
    instagram_url: 'https://instagram.com/accpix',
    youtube_url: 'https://www.youtube.com/user/ACCDigitalNetwork',
    google_plus_url: 'https://plus.google.com/+ACCDigitalNetwork/posts',
    pinterest_url: ''
  },
  {
    org_code: 'mwc',
    google_analytics_key: 'UA-42127586-2',
    google_search_key: '017584644842895102711:jebtmu_2gyo',
    dfp_path_prefix: '/32984737/themwc.com',
    ooyala_video_player_id: 'df4288b2435745ccbcd1d42491b8c458',
    ooyala_audio_player_id: 'bd943e6cf77b42c993fef3d025da642b',
    ooyala_ad_set_codes: 'd079912fe14b4654a5dda5bc55aa318f',
    platform_name: 'oas-mwc',
    copyright: 'Mountain West Conference. All Rights Reserved.',
    publication_name: 'Mountain West',
    amp_config_id: amps[12].id,
    facebook_app_id: '',
    institution_twitter_handle: '@mountainwest',
    institution_twitter_string: 'mountainwest',
    default_tickets_link: '/page/ACC-Tickets',
    media_byline: 'Mountain West',
    facebook_url: 'https://www.facebook.com/MountainWestConference',
    twitter_url: 'https://twitter.com/MountainWest',
    instagram_url: 'https://instagram.com/MountainWestConference',
    youtube_url: 'https://www.youtube.com/user/MountainWestConf',
    pinterest_url: ''
  },
  {
    org_code: 'wcc',
    google_analytics_key: 'UA-63889403-1',
    google_search_key: '009788335473661050134:8ayitxbfslg',
    dfp_path_prefix: '/32984737/wccsports.com',
    ooyala_video_player_id: '764e14bf6959478f885a9b7c9fcc471a',
    ooyala_audio_player_id: 'a879891d6bb54f9882e5ca703e1950eb',
    ooyala_ad_set_codes: 'fa766171378b4cf7982595bb975928eb',
    platform_name: 'oas-wcc',
    copyright: 'West Coast Conference. All Rights Reserved.',
    publication_name: 'WCC Digital Network',
    amp_config_id: amps[6].id,
    facebook_app_id: '',
    institution_twitter_handle: '',
    institution_twitter_string: '',
    default_tickets_link: '/page/tickets',
    media_byline: 'WCC Athletics',
    facebook_url: 'https://www.facebook.com/WCCsports',
    twitter_url: 'https://twitter.com/WCCsports',
    instagram_url: 'https://instagram.com/wccsports',
    youtube_url: 'https://www.youtube.com/user/WCCsports',
    google_plus_url: 'https://plus.google.com/+WCCsports/about',
    pinterest_url: ''
  }
])
###
# Create Account feature toggles
###
FeatureToggle.create([
  {
    robots: false,
    paywall: true,
    sitemap: false,
    account_id: accounts.first.id
  },
  {
    robots: false,
    paywall: false,
    sitemap: false,
    account_id: accounts[1].id
  },
  {
    robots: false,
    paywall: false,
    sitemap: false,
    account_id: accounts[2].id
  },
  {
    robots: false,
    paywall: false,
    sitemap: false,
    account_id: accounts[3].id
  },
  {
    robots: false,
    paywall: false,
    sitemap: false,
    account_id: accounts[4].id
  }
])
