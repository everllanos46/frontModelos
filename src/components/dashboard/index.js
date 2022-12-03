import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { ResponsivePie } from "@nivo/pie";
import { CardActionArea } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Map from "./map";

const dataValledupar = [
  {
    created_at: "Fri Nov 04 21:16:41 +0000 2022",
    id: 1588641406402588700,
    id_str: "1588641406402588672",
    text: "@MariaFBohorquez JAJAJA lo sabia. Mafe siendo Mafe",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: "MariaFBohorquez",
          name: "~Maria Fernanda~",
          id: 242087605,
          id_str: "242087605",
          indices: [0, 16],
        },
      ],
      urls: [],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: 1588640841723412500,
    in_reply_to_status_id_str: "1588640841723412480",
    in_reply_to_user_id: 242087605,
    in_reply_to_user_id_str: "242087605",
    in_reply_to_screen_name: "MariaFBohorquez",
    user: {
      id: 2928891034,
      id_str: "2928891034",
      name: "Nati",
      screen_name: "Natae3_",
      location: "",
      description: "",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 134,
      friends_count: 112,
      listed_count: 1,
      created_at: "Thu Dec 18 02:44:29 +0000 2014",
      favourites_count: 1044,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 1513,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "000000",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1516176941824499720/-_f9kOKV_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1516176941824499720/-_f9kOKV_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/2928891034/1650319871",
      profile_link_color: "F58EA8",
      profile_sidebar_border_color: "000000",
      profile_sidebar_fill_color: "000000",
      profile_text_color: "000000",
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "012d9a8d4001c284",
      url: "https://api.twitter.com/1.1/geo/id/012d9a8d4001c284.json",
      place_type: "city",
      name: "Valledupar",
      full_name: "Valledupar, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-73.8571829971679, 9.79333700397057],
            [-73.0693890034415, 9.79333700397057],
            [-73.0693890034415, 10.8555639961926],
            [-73.8571829971679, 10.8555639961926],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:14:10 +0000 2022",
    id: 1588640774929121300,
    id_str: "1588640774929121280",
    text: "No tiene perdón de Dios🥵🥵 https://t.co/YWRjxu4V7D",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/YWRjxu4V7D",
          expanded_url:
            "https://twitter.com/silvia_ofthart/status/1588515112528539649",
          display_url: "twitter.com/silvia_ofthart…",
          indices: [26, 49],
        },
      ],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2790078083,
      id_str: "2790078083",
      name: "Zaidy rada",
      screen_name: "zaidy_rada",
      location: "",
      description: "",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 184,
      friends_count: 102,
      listed_count: 0,
      created_at: "Sun Sep 28 22:05:53 +0000 2014",
      favourites_count: 1841,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 1401,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C0DEED",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1556644150992412673/Bfvg4dO9_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1556644150992412673/Bfvg4dO9_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/2790078083/1657855867",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "012d9a8d4001c284",
      url: "https://api.twitter.com/1.1/geo/id/012d9a8d4001c284.json",
      place_type: "city",
      name: "Valledupar",
      full_name: "Valledupar, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-73.8571829971679, 9.79333700397057],
            [-73.0693890034415, 9.79333700397057],
            [-73.0693890034415, 10.8555639961926],
            [-73.8571829971679, 10.8555639961926],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: true,
    quoted_status_id: 1588515112528539600,
    quoted_status_id_str: "1588515112528539649",
    quoted_status: {
      created_at: "Fri Nov 04 12:54:50 +0000 2022",
      id: 1588515112528539600,
      id_str: "1588515112528539649",
      text: "@MariaCr15845841 Niña de 4 años violada y herida en La Plata - Huila. Amordazaron a sus abuelos maternos (cuidadore… https://t.co/J9ZPuQvgGT",
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: "MariaCr15845841",
            name: "Maria Cristina Hurtado",
            id: 1325497848314671000,
            id_str: "1325497848314671105",
            indices: [0, 16],
          },
        ],
        urls: [
          {
            url: "https://t.co/J9ZPuQvgGT",
            expanded_url:
              "https://twitter.com/i/web/status/1588515112528539649",
            display_url: "twitter.com/i/web/status/1…",
            indices: [117, 140],
          },
        ],
      },
      metadata: {
        iso_language_code: "es",
        result_type: "recent",
      },
      source:
        '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: 1588155229412941800,
      in_reply_to_status_id_str: "1588155229412941824",
      in_reply_to_user_id: 1325497848314671000,
      in_reply_to_user_id_str: "1325497848314671105",
      in_reply_to_screen_name: "MariaCr15845841",
      user: {
        id: 1579427364550877200,
        id_str: "1579427364550877186",
        name: "Silvia",
        screen_name: "Silvia_OfThart",
        location: "",
        description:
          "- Nueva cuenta 😔 - 🧠La llorería Uribista llena mi corazón!!",
        url: null,
        entities: {
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 213,
        friends_count: 202,
        listed_count: 1,
        created_at: "Mon Oct 10 11:03:36 +0000 2022",
        favourites_count: 4381,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 383,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: "F5F8FA",
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url:
          "http://pbs.twimg.com/profile_images/1579452197254955009/gRRyg17-_normal.jpg",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1579452197254955009/gRRyg17-_normal.jpg",
        profile_banner_url:
          "https://pbs.twimg.com/profile_banners/1579427364550877186/1665405058",
        profile_link_color: "1DA1F2",
        profile_sidebar_border_color: "C0DEED",
        profile_sidebar_fill_color: "DDEEF6",
        profile_text_color: "333333",
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: "none",
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 357,
      favorite_count: 573,
      favorited: false,
      retweeted: false,
      lang: "es",
    },
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:12:38 +0000 2022",
    id: 1588640387685814300,
    id_str: "1588640387685814272",
    text: "04 de noviembre, día del administrador de empresas. Feliz día para mí y todos mis colegas🙌🏼💫 https://t.co/DsBLZwHgVk",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [],
      media: [
        {
          id: 1588640375131996200,
          id_str: "1588640375131996167",
          indices: [93, 116],
          media_url: "http://pbs.twimg.com/media/Fgv8AROWAAc4lBN.jpg",
          media_url_https: "https://pbs.twimg.com/media/Fgv8AROWAAc4lBN.jpg",
          url: "https://t.co/DsBLZwHgVk",
          display_url: "pic.twitter.com/DsBLZwHgVk",
          expanded_url:
            "https://twitter.com/yalp24/status/1588640387685814272/photo/1",
          type: "photo",
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: "crop",
            },
            small: {
              w: 644,
              h: 680,
              resize: "fit",
            },
            large: {
              w: 828,
              h: 874,
              resize: "fit",
            },
            medium: {
              w: 828,
              h: 874,
              resize: "fit",
            },
          },
        },
      ],
    },
    extended_entities: {
      media: [
        {
          id: 1588640375131996200,
          id_str: "1588640375131996167",
          indices: [93, 116],
          media_url: "http://pbs.twimg.com/media/Fgv8AROWAAc4lBN.jpg",
          media_url_https: "https://pbs.twimg.com/media/Fgv8AROWAAc4lBN.jpg",
          url: "https://t.co/DsBLZwHgVk",
          display_url: "pic.twitter.com/DsBLZwHgVk",
          expanded_url:
            "https://twitter.com/yalp24/status/1588640387685814272/photo/1",
          type: "photo",
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: "crop",
            },
            small: {
              w: 644,
              h: 680,
              resize: "fit",
            },
            large: {
              w: 828,
              h: 874,
              resize: "fit",
            },
            medium: {
              w: 828,
              h: 874,
              resize: "fit",
            },
          },
        },
      ],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 1320820732981629000,
      id_str: "1320820732981628934",
      name: "LP",
      screen_name: "yalp24",
      location: "Valledupar, Colombia",
      description: "Una Barranquillera en Valledupar✨",
      url: "https://t.co/U4prwgDAJ2",
      entities: {
        url: {
          urls: [
            {
              url: "https://t.co/U4prwgDAJ2",
              expanded_url:
                "https://instagram.com/lisethyp?igshid=YmMyMTA2M2Y=",
              display_url: "instagram.com/lisethyp?igshi…",
              indices: [0, 23],
            },
          ],
        },
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 156,
      friends_count: 339,
      listed_count: 0,
      created_at: "Mon Oct 26 20:13:14 +0000 2020",
      favourites_count: 1397,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 2521,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1577112208974168064/CEk7JEXx_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1577112208974168064/CEk7JEXx_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/1320820732981628934/1603743417",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "012d9a8d4001c284",
      url: "https://api.twitter.com/1.1/geo/id/012d9a8d4001c284.json",
      place_type: "city",
      name: "Valledupar",
      full_name: "Valledupar, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-73.8571829971679, 9.79333700397057],
            [-73.0693890034415, 9.79333700397057],
            [-73.0693890034415, 10.8555639961926],
            [-73.8571829971679, 10.8555639961926],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:06:00 +0000 2022",
    id: 1588638717958590500,
    id_str: "1588638717958590464",
    text: "@yudejalilie @SuEmpanadologo Jajaja ya sabes, compra el globo.",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: "yudejalilie",
          name: "Yude Jalilie",
          id: 317816678,
          id_str: "317816678",
          indices: [0, 12],
        },
        {
          screen_name: "SuEmpanadologo",
          name: "El de las empanadas!!!",
          id: 1300170028126531600,
          id_str: "1300170028126531584",
          indices: [13, 28],
        },
      ],
      urls: [],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: 1588577496718807000,
    in_reply_to_status_id_str: "1588577496718807040",
    in_reply_to_user_id: 317816678,
    in_reply_to_user_id_str: "317816678",
    in_reply_to_screen_name: "yudejalilie",
    user: {
      id: 140699557,
      id_str: "140699557",
      name: "Meudys❤️‍🩹",
      screen_name: "meudys_19",
      location: "",
      description: "",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 367,
      friends_count: 267,
      listed_count: 0,
      created_at: "Thu May 06 05:12:32 +0000 2010",
      favourites_count: 4488,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 3256,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C6E2EE",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme13/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme13/bg.gif",
      profile_background_tile: true,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1575680101630578688/CzzcEb7O_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1575680101630578688/CzzcEb7O_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/140699557/1659653546",
      profile_link_color: "1F98C7",
      profile_sidebar_border_color: "C6E2EE",
      profile_sidebar_fill_color: "DAECF4",
      profile_text_color: "663B12",
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "012d9a8d4001c284",
      url: "https://api.twitter.com/1.1/geo/id/012d9a8d4001c284.json",
      place_type: "city",
      name: "Valledupar",
      full_name: "Valledupar, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-73.8571829971679, 9.79333700397057],
            [-73.0693890034415, 9.79333700397057],
            [-73.0693890034415, 10.8555639961926],
            [-73.8571829971679, 10.8555639961926],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:00:10 +0000 2022",
    id: 1588637248572252200,
    id_str: "1588637248572252160",
    text: "@KellyHdezFrz JAJAJJAJA esos no son juegos 👀😂",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: "KellyHdezFrz",
          name: "KellysHernándezFlorez",
          id: 918512228558622700,
          id_str: "918512228558622721",
          indices: [0, 13],
        },
      ],
      urls: [],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: 1588629990651924500,
    in_reply_to_status_id_str: "1588629990651924487",
    in_reply_to_user_id: 918512228558622700,
    in_reply_to_user_id_str: "918512228558622721",
    in_reply_to_screen_name: "KellyHdezFrz",
    user: {
      id: 559992765,
      id_str: "559992765",
      name: "1295💜",
      screen_name: "Lineyruiz12",
      location: "Valledupar/Cesar♥",
      description: "El Difícil Mag.💙✨ me gusta el guaro primo hecmano ✨",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 690,
      friends_count: 193,
      listed_count: 1,
      created_at: "Sat Apr 21 22:42:22 +0000 2012",
      favourites_count: 62754,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 28921,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "9266CC",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme11/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme11/bg.gif",
      profile_background_tile: true,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1574824745769603082/dDoQFoGN_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1574824745769603082/dDoQFoGN_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/559992765/1632975491",
      profile_link_color: "19CF86",
      profile_sidebar_border_color: "000000",
      profile_sidebar_fill_color: "7AC3EE",
      profile_text_color: "3D1957",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "regular",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "012d9a8d4001c284",
      url: "https://api.twitter.com/1.1/geo/id/012d9a8d4001c284.json",
      place_type: "city",
      name: "Valledupar",
      full_name: "Valledupar, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-73.8571829971679, 9.79333700397057],
            [-73.0693890034415, 9.79333700397057],
            [-73.0693890034415, 10.8555639961926],
            [-73.8571829971679, 10.8555639961926],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
];

const dataColombia = [
  {
    created_at: "Fri Nov 04 21:48:59 +0000 2022",
    id: 1588649536918282200,
    id_str: "1588649536918282240",
    text: "Nawebona 200mil pesos la mensualidad en el CrossFit , que incluye? Un pase para la participación del desafío?",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 101237440,
      id_str: "101237440",
      name: "Jota",
      screen_name: "JleoAlcala",
      location: "Envigado, Colombia",
      description: "A veces ni yo me entiendo",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 1068,
      friends_count: 1809,
      listed_count: 8,
      created_at: "Sat Jan 02 14:41:09 +0000 2010",
      favourites_count: 24762,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 34623,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "0E0D02",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme16/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme16/bg.gif",
      profile_background_tile: true,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1574077373187768320/0onLJYiu_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1574077373187768320/0onLJYiu_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/101237440/1648898758",
      profile_link_color: "ABB8C2",
      profile_sidebar_border_color: "FFFFFF",
      profile_sidebar_fill_color: "0E0D02",
      profile_text_color: "39BD91",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "regular",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "00c77f9d025ab29a",
      url: "https://api.twitter.com/1.1/geo/id/00c77f9d025ab29a.json",
      place_type: "city",
      name: "Envigado",
      full_name: "Envigado, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-75.6146150033941, 6.09192599666967],
            [-75.5666730028971, 6.09192599666967],
            [-75.5666730028971, 6.1868409988731],
            [-75.6146150033941, 6.1868409988731],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:48:59 +0000 2022",
    id: 1588649535819042800,
    id_str: "1588649535819042816",
    text: "Hablo mucho de ti conmigo ☺️😬💪🏻 https://t.co/xIpIjJqN0f",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [],
      media: [
        {
          id: 1588649524565868500,
          id_str: "1588649524565868546",
          indices: [32, 55],
          media_url: "http://pbs.twimg.com/media/FgwEU1hXgAIWOhR.jpg",
          media_url_https: "https://pbs.twimg.com/media/FgwEU1hXgAIWOhR.jpg",
          url: "https://t.co/xIpIjJqN0f",
          display_url: "pic.twitter.com/xIpIjJqN0f",
          expanded_url:
            "https://twitter.com/alejak_13/status/1588649535819042816/photo/1",
          type: "photo",
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: "crop",
            },
            medium: {
              w: 900,
              h: 1200,
              resize: "fit",
            },
            small: {
              w: 510,
              h: 680,
              resize: "fit",
            },
            large: {
              w: 1536,
              h: 2048,
              resize: "fit",
            },
          },
        },
      ],
    },
    extended_entities: {
      media: [
        {
          id: 1588649524565868500,
          id_str: "1588649524565868546",
          indices: [32, 55],
          media_url: "http://pbs.twimg.com/media/FgwEU1hXgAIWOhR.jpg",
          media_url_https: "https://pbs.twimg.com/media/FgwEU1hXgAIWOhR.jpg",
          url: "https://t.co/xIpIjJqN0f",
          display_url: "pic.twitter.com/xIpIjJqN0f",
          expanded_url:
            "https://twitter.com/alejak_13/status/1588649535819042816/photo/1",
          type: "photo",
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: "crop",
            },
            medium: {
              w: 900,
              h: 1200,
              resize: "fit",
            },
            small: {
              w: 510,
              h: 680,
              resize: "fit",
            },
            large: {
              w: 1536,
              h: 2048,
              resize: "fit",
            },
          },
        },
      ],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 3418904716,
      id_str: "3418904716",
      name: "Alejandra Kñz 🐽💫",
      screen_name: "alejak_13",
      location: "Cúcuta, Colombia",
      description: "Ingeniero Ambiental ♻️ U.P. Esp. HSEQ 👷🏻‍♀️",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 174,
      friends_count: 161,
      listed_count: 1,
      created_at: "Wed Aug 12 21:39:43 +0000 2015",
      favourites_count: 1588,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 1347,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C0DEED",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1566904192463245313/_QzQDYUR_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1566904192463245313/_QzQDYUR_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/3418904716/1526337709",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "00a0366f1f6cd7ff",
      url: "https://api.twitter.com/1.1/geo/id/00a0366f1f6cd7ff.json",
      place_type: "city",
      name: "Cúcuta",
      full_name: "Cúcuta, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-72.6063960007293, 7.72117499601678],
            [-72.3477895939751, 7.72117499601678],
            [-72.3477895939751, 8.42998879229072],
            [-72.6063960007293, 8.42998879229072],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:48:55 +0000 2022",
    id: 1588649519117660200,
    id_str: "1588649519117660160",
    text: "@bettycriticonaa Por qué suponen que era por eso? Para qué inventar tanto? Ya respeten y colaboren en no polarizar más",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: "bettycriticonaa",
          name: "🍸betty criticona soy-cuenta actual",
          id: 1156013155388182500,
          id_str: "1156013155388182528",
          indices: [0, 16],
        },
      ],
      urls: [],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: 1588631687155445800,
    in_reply_to_status_id_str: "1588631687155445760",
    in_reply_to_user_id: 1156013155388182500,
    in_reply_to_user_id_str: "1156013155388182528",
    in_reply_to_screen_name: "bettycriticonaa",
    user: {
      id: 147358249,
      id_str: "147358249",
      name: "Yair Navas Garrido",
      screen_name: "yairnavasg",
      location: "Chicago, IL",
      description: "Abogado. Contratación Estatal. #MountainBike 🇨🇴 🇺🇸",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 1778,
      friends_count: 1099,
      listed_count: 20,
      created_at: "Sun May 23 23:09:17 +0000 2010",
      favourites_count: 37863,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 89547,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "642D8B",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme10/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme10/bg.gif",
      profile_background_tile: true,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1483382745137094660/U418Qw0B_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1483382745137094660/U418Qw0B_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/147358249/1490277731",
      profile_link_color: "FF0000",
      profile_sidebar_border_color: "000000",
      profile_sidebar_fill_color: "7AC3EE",
      profile_text_color: "3D1957",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "002d9a65239936cd",
      url: "https://api.twitter.com/1.1/geo/id/002d9a65239936cd.json",
      place_type: "city",
      name: "Montería",
      full_name: "Montería, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-76.2429620001678, 8.2412280007418],
            [-75.6678589968934, 8.2412280007418],
            [-75.6678589968934, 8.94936500127411],
            [-76.2429620001678, 8.94936500127411],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
  {
    created_at: "Fri Nov 04 21:48:50 +0000 2022",
    id: 1588649495461769200,
    id_str: "1588649495461769216",
    text: "Jum😒 https://t.co/VfnusRmklC",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/VfnusRmklC",
          expanded_url:
            "https://twitter.com/MarcevRiascos/status/1588620584224948224",
          display_url: "twitter.com/MarcevRiascos/…",
          indices: [5, 28],
        },
      ],
    },
    metadata: {
      iso_language_code: "und",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 1287085690073813000,
      id_str: "1287085690073812993",
      name: "Day🤍",
      screen_name: "DaynaPino",
      location: "Buenaventura, Colombia",
      description: "🇨🇴| 𝒩𝒶𝒹𝒾ℯ ℯ𝓈 𝒸ℴ𝓂ℴ 𝓉𝓊💙\n📍Consejera Local de Juventud🔰",
      url: "https://t.co/5hS5emiXt8",
      entities: {
        url: {
          urls: [
            {
              url: "https://t.co/5hS5emiXt8",
              expanded_url: "https://www.instagram.com/pinodaina?r=nametag",
              display_url: "instagram.com/pinodaina?r=na…",
              indices: [0, 23],
            },
          ],
        },
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 166,
      friends_count: 94,
      listed_count: 2,
      created_at: "Sat Jul 25 18:02:45 +0000 2020",
      favourites_count: 1790,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 284,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1588591048317616128/MSvGfouF_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1588591048317616128/MSvGfouF_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/1287085690073812993/1656562315",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "0016b0ca4701a899",
      url: "https://api.twitter.com/1.1/geo/id/0016b0ca4701a899.json",
      place_type: "city",
      name: "Buenaventura",
      full_name: "Buenaventura, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-81.6162109999167, 3.12384100419953],
            [-76.7790530000063, 3.12384100419953],
            [-76.7790530000063, 4.2511399962],
            [-81.6162109999167, 4.2511399962],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: true,
    quoted_status_id: 1588620584224948200,
    quoted_status_id_str: "1588620584224948224",
    quoted_status: {
      created_at: "Fri Nov 04 19:53:57 +0000 2022",
      id: 1588620584224948200,
      id_str: "1588620584224948224",
      text: "Que estrés hacer trabajos en grupo.",
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
      },
      metadata: {
        iso_language_code: "und",
        result_type: "recent",
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 4348406001,
        id_str: "4348406001",
        name: "Dosantos",
        screen_name: "MarcevRiascos",
        location: "",
        description: "Pon el miedo en segundo plano y desenfócalo. Al2",
        url: null,
        entities: {
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 100,
        friends_count: 59,
        listed_count: 0,
        created_at: "Wed Dec 02 07:57:14 +0000 2015",
        favourites_count: 1035,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 766,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: "000000",
        profile_background_image_url:
          "http://abs.twimg.com/images/themes/theme1/bg.png",
        profile_background_image_url_https:
          "https://abs.twimg.com/images/themes/theme1/bg.png",
        profile_background_tile: false,
        profile_image_url:
          "http://pbs.twimg.com/profile_images/1586051860737163267/bqCH9qAV_normal.jpg",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1586051860737163267/bqCH9qAV_normal.jpg",
        profile_banner_url:
          "https://pbs.twimg.com/profile_banners/4348406001/1662233383",
        profile_link_color: "ABB8C2",
        profile_sidebar_border_color: "000000",
        profile_sidebar_fill_color: "000000",
        profile_text_color: "000000",
        profile_use_background_image: false,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: "none",
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 1,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: "es",
    },
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "und",
  },
  {
    created_at: "Fri Nov 04 21:48:49 +0000 2022",
    id: 1588649491191980000,
    id_str: "1588649491191980032",
    text: "Uno se sorprende de la defensa ciega hacia Lula solo porque es de izquierda. Una prueba del carácter democrático de… https://t.co/vgSMw4Fmsn",
    truncated: true,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/vgSMw4Fmsn",
          expanded_url: "https://twitter.com/i/web/status/1588649491191980032",
          display_url: "twitter.com/i/web/status/1…",
          indices: [117, 140],
        },
      ],
    },
    metadata: {
      iso_language_code: "es",
      result_type: "recent",
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 345479171,
      id_str: "345479171",
      name: "Gustavo C",
      screen_name: "Gus_Castell",
      location: "",
      description:
        "Esa mano contra el Muro, representa mi rechazo a todo tipo de  discriminación,  separación o aislamiento de una persona  solo por pensar diferente.",
      url: null,
      entities: {
        description: {
          urls: [],
        },
      },
      protected: false,
      followers_count: 565,
      friends_count: 993,
      listed_count: 1,
      created_at: "Sat Jul 30 17:28:51 +0000 2011",
      favourites_count: 13277,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 15993,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C0DEED",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1193841445435785216/q0qpOs0J_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1193841445435785216/q0qpOs0J_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/345479171/1623203708",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none",
      withheld_in_countries: [],
    },
    geo: null,
    coordinates: null,
    place: {
      id: "0176070b02f35a51",
      url: "https://api.twitter.com/1.1/geo/id/0176070b02f35a51.json",
      place_type: "city",
      name: "Tenjo",
      full_name: "Tenjo, Colombia",
      country_code: "CO",
      country: "Colombia",
      contained_within: [],
      bounding_box: {
        type: "Polygon",
        coordinates: [
          [
            [-74.2352870038787, 4.72822200406493],
            [-74.0955059984732, 4.72822200406493],
            [-74.0955059984732, 4.8842359995478],
            [-74.2352870038787, 4.8842359995478],
          ],
        ],
      },
      attributes: {},
    },
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "es",
  },
];

function Dashboard({ buscador, info }) {
  debugger
  const [openDialog, setOpenDialog] = useState(false);

  const closeOpenDialog = (state) => {
    setOpenDialog(state);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ width: "100%", maxHeight: "700px", flexDirection: "row" }}
      >
        <Grid container>
          <Grid
            mt={1}
            ml={1}
            item
            xs={4}
            style={{
              maxHeight: "700px",
              overflow: "scroll",
              width: "100px",
              maxWidth: "380px",
            }}
          >
            {info.length > 0 &&
              info.map((item) => (
                <Card variant="outlined" style={{ width: "345px" }}>
                  <CardActionArea
                    onClick={() => {
                      debugger;
                      closeOpenDialog(true);
                    }}
                  >
                    <CardContent>
                      <Grid cointainer>
                        <Grid item>
                          <Avatar
                            alt="Remy Sharp"
                            style={{ width: "15%" }}
                            src={item.user.profile_image_url}
                          />
                          <Typography
                            sx={{
                              fontSize: 14,
                              marginLeft: "21%",
                              marginTop: "-10%",
                            }}
                            color="text.secondary"
                          >
                            @{item.user.screen_name}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography mt={3} variant="body2">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            
          </Grid>
          {/* <Grid item xs={1}>
            <Divider
              orientation="vertical"
              style={{ height: "100%" }}
              flexItem
            />
          </Grid> */}
          <Grid
            item
            xs={8}
            style={{
              height: "300px",
              marginLeft: "36%",
              marginTop: info.length>0 ? "-50%" : "1%",
            }}
          >
            <ResponsivePie
              data={[
                {
                  id: "Buenos",
                  label: "Buenos",
                  value: 4,
                  color: "hsl(39, 70%, 50%)",
                },
                {
                  id: "Malos",
                  label: "Malos",
                  value: 1,
                  color: "hsl(110, 70%, 50%)",
                },
              ]}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              enableArcLinkLabels={false}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Grid>
          <div style={{ height: "10%", marginTop: info.length>0 ? "-25%" : "2%" }}>
            <Map
              posiciones={dataValledupar[0].place.bounding_box.coordinates}
            />
          </div>
        </Grid>
      </Box>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        open={openDialog}
        onClose={() => closeOpenDialog(false)}
        fullWidth
        maxWidth="xs"
        style={{ height: "700px" }}
      >
        <DialogTitle>Tweet</DialogTitle>
        <DialogContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dashboard;
