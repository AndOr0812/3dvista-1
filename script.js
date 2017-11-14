TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79",
  "hfovMax": 120,
  "partial": false,
  "hfov": 360,
  "vfov": 119.94471744471744,
  "pitch": -30.02764127764128,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3104,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3104
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2F7FABB4_234D_6BF8_41A5_5A10341A16E3",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77, this.camera_2D57FDBE_2253_81DD_41AB_32FC0BC32A9F); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "yaw": 155.65317919075144,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 46.69061332793295,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 145
          }
         ]
        },
        "roll": 0,
        "pitch": 1.0008034992823565
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 46.69061332793295,
        "roll": 0,
        "yaw": 155.65317919075144,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.0008034992823565,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1837,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "width": 1341
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D661BE0_234B_AB98_41BA_4379027A14AD",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 157.10982658959537,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.904597855702306,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "roll": 0,
        "pitch": 14.327497689986282
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 14.327497689986282,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 553,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "width": 1061
          }
         ]
        },
        "hfov": 37.904597855702306,
        "roll": 0,
        "yaw": 157.10982658959537
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2CF6FF07_2346_AC98_41BA_2A6E6E2331D8",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 158.35838150289018,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.458265417338785,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 169,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 169
          }
         ]
        },
        "roll": 0,
        "pitch": -3.788477225501867
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.458265417338785,
        "roll": 0,
        "yaw": 158.35838150289018,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.788477225501867,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 338,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 338
          }
         ]
        }
       }
      ]
     },
     {
      "yaw": 29.341040462427745,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2D415092_2345_B5BB_41BC_CEAD2C317186",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 11.620512932499548
     },
     {
      "yaw": -44.323699421965316,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2D4737F8_2345_BB68_418A_5358B80E2E70",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 14.119268093256531
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 78.3,
      "inertia": false
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DB0DB73_235D_AB79_41B7_0820B9266D94",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "yaw": -99.8843930635838,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 40.488051799421136,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 181
          }
         ]
        },
        "roll": 0,
        "pitch": 8.288839384823566
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 40.488051799421136,
        "roll": 0,
        "yaw": -99.8843930635838,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 8.288839384823566,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1263,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 1146
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DFC8004_235D_5498_41B2_0298AC8CE89D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -93.43352601156067,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 41.475622463669445,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 48
          }
         ]
        },
        "roll": 0,
        "pitch": 4.7489362404178355
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 4.7489362404178355,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 372,
           "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 1129
          }
         ]
        },
        "hfov": 41.475622463669445,
        "roll": 0,
        "yaw": -93.43352601156067
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3104,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3104
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3104,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3104
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3104,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3104
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_t.jpg",
  "class": "Panorama",
  "label": "varenda",
  "hfovMin": 100
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -94.26589595375722,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.788477225501867,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -69.71098265895954,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.952186480175529,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -56.809248554913296,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.868283514313326,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -33.50289017341041,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.700319221311005,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -22.68208092485549,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.703691579718351,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0.6242774566473989,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.116778414770504,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 18.104046242774565,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.703691579718351,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 37.664739884393065,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.86740083439201,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 52.64739884393064,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.36952835355634,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 73.45664739884393,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.952186480175529,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 86.35838150289017,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.4568036778258853,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 112.9942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.36366631666297,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.3179190751445,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.36952835355634,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.957165837147584,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 161.27167630057804,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.03199276898699,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 164.1849710982659,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -2.122640451663876,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -173.34104046242774,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.286349706337536,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -160.02312138728325,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.204936418961364,
     "pitchSpeed": 6.240049140049139
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -118.0092485549133,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "pitch": -2.913912919236924
  }
 },
 {
  "id": "panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77",
  "partial": false,
  "hfov": 360,
  "vfov": 134.50968523002422,
  "pitch": -22.745157384987895,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_u.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_t.jpg",
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_d.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D7FB170_237D_7777_41B1_8302C243C4D9",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79, this.camera_2D8ACEBD_2253_83DF_418B_DC45E395B19E); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "yaw": -160.85549132947978,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 38.85708350746065,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 79
          }
         ]
        },
        "roll": 0,
        "pitch": 2.4599486228354652
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 38.85708350746065,
        "roll": 0,
        "yaw": -160.85549132947978,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.4599486228354652,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1866,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_8_0.png",
           "class": "ImageResourceLevel",
           "width": 741
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "yaw": 95.9306358381503,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2D9F9D24_237D_EC99_41BA_D019E428CDA9",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 14.117301345620463
     },
     {
      "yaw": 14.358381502890174,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2D9AD455_237D_FCB8_41BA_CF21B546A394",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 8.288624984227965
     },
     {
      "yaw": -171.67630057803467,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2D950504_237D_DC98_4193_199A50E0A066",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 7.455956932600465
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D415FA1_237B_AB98_4183_081EE1BA3A10",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C63B5DB_235D_FFA8_419F_30851F943185, this.camera_2D9E1EFC_2253_835D_4198_68620843E39E); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "yaw": -88.23121387283237,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.31383129458946,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 39
          }
         ]
        },
        "roll": 0,
        "pitch": 1.4191135583010903
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.31383129458946,
        "roll": 0,
        "yaw": -88.23121387283237,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.4191135583010903,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1152,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_7_0.png",
           "class": "ImageResourceLevel",
           "width": 226
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DF326D2_2346_BDB8_41B2_8E0E2C578349",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -157.94219653179192,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.73695788906238,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "roll": 0,
        "pitch": 24.94198601677796
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 24.94198601677796,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 305,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "width": 763
          }
         ]
        },
        "hfov": 37.73695788906238,
        "roll": 0,
        "yaw": -157.94219653179192
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D437F86_2346_EB98_41B1_DB4D26ABBA62",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -162.72832369942196,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.9103336782929,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 159,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "roll": 0,
        "pitch": -5.866731893439534
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 26.9103336782929,
        "roll": 0,
        "yaw": -162.72832369942196,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.866731893439534,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 397,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_5_0.png",
           "class": "ImageResourceLevel",
           "width": 496
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D83FC80_2345_ED98_4182_099C2DB936E8",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -75.95375722543352,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 38.60138081502962,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "roll": 0,
        "pitch": 14.949969397247964
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 14.949969397247964,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 382,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "width": 733
          }
         ]
        },
        "hfov": 38.60138081502962,
        "roll": 0,
        "yaw": -75.95375722543352
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DAFA40E_234D_7CA8_41A2_F88D31339B5D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -85.94219653179191,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.20386679149193,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 139,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 114
          }
         ]
        },
        "roll": 0,
        "pitch": -12.193644056215703
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.20386679149193,
        "roll": 0,
        "yaw": -85.94219653179191,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.193644056215703,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 278,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "width": 229
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D9EF2C0_234D_7597_417A_B0C522C8EAB8",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C639217_235D_D4B8_41B8_F172A615E495, this.camera_2D932FA2_2253_81E5_41C0_0789D55C9159); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "yaw": 94.89017341040464,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.368379104620356,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 84
          }
         ]
        },
        "roll": 0,
        "pitch": 4.541618751904215
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 19.368379104620356,
        "roll": 0,
        "yaw": 94.89017341040464,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 4.541618751904215,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 851,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 358
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2E1B31EA_234F_F768_41AC_3E5B016A55C2",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 99.05202312138728,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 27.06677166073496,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 20
          }
         ]
        },
        "roll": 0,
        "pitch": 13.909134332713588
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 13.909134332713588,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 405,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 511
          }
         ]
        },
        "hfov": 27.06677166073496,
        "roll": 0,
        "yaw": 99.05202312138728
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DB0F0D0_234E_D5B8_41B6_8FA4AA5E6A08",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 94.6820809248555,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.445021211315977,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 114
          }
         ]
        },
        "roll": 0,
        "pitch": -4.617729815998284
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.445021211315977,
        "roll": 0,
        "yaw": 94.6820809248555,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.617729815998284,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 229,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 229
          }
         ]
        }
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 84.6,
      "inertia": false
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B2395BE_21DF_81DA_41BC_779A0F08B65B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 14.15028901734104,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.547686935296262,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_11_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 47
          }
         ]
        },
        "roll": 0,
        "pitch": 2.4599486228354652
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 9.547686935296262,
        "roll": 0,
        "yaw": 14.15028901734104,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.4599486228354652,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 735,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_11_0.png",
           "class": "ImageResourceLevel",
           "width": 175
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2ACBCE57_21DF_82AB_41B2_35642349872D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 3.53757225433526,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 28.40126132407318,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "roll": 0,
        "pitch": 12.868299268179214
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 12.868299268179214,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 290,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_10_0.png",
           "class": "ImageResourceLevel",
           "width": 534
          }
         ]
        },
        "hfov": 28.40126132407318,
        "roll": 0,
        "yaw": 3.53757225433526
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B3749BC_21D2_81DD_4198_8264243D02EA",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 11.861271676300579,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.458314571963053,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 114
          }
         ]
        },
        "roll": 0,
        "pitch": -3.785061764370784
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.458314571963053,
        "roll": 0,
        "yaw": 11.861271676300579,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.785061764370784,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 229,
           "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_0_HS_9_0.png",
           "class": "ImageResourceLevel",
           "width": 229
          }
         ]
        }
       }
      ]
     }
    ],
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2096,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2096
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_t.jpg",
  "class": "Panorama",
  "label": "hall",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.85549132947978,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 6.623288880972965,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.3063583815029,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.121293035855464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.0115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.193412409714533,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 78.03468208092485,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 27.856324197474216,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.125284726090465,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.7514450867052,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.27265822328796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.360744358087034,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -7.699421965317919,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 24.525651990964217,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.74566473988439,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.782637448875464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.60575474529328,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -66.79768786127168,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.362311732826715,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -64.30057803468208,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.68343318412703,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.35260115606935,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.4599486228354652,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -115.49132947976878,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 31.60333042979796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.94041864203828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -156.6936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.69298393933671,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.17919075144508,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -97.59537572254337,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -34.59377967458828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.13294797687861,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -30.01410539063703,
     "pitchSpeed": 8.861743341404356
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_2C63B5DB_235D_FFA8_419F_30851F943185",
  "partial": false,
  "hfov": 360,
  "vfov": 119.22398589065256,
  "pitch": -30.38800705467372,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3248,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3248
      },
      {
       "height": 1024,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DBBDFFB_234A_AB68_41B2_DC174FD14E74",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77, this.camera_2D68FDFE_2253_815D_41A5_C9DF1BF5D8E6); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "yaw": -127.5606936416185,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.79301504978521,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 69
          }
         ]
        },
        "roll": 0,
        "pitch": -3.688679119457893
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 18.79301504978521,
        "roll": 0,
        "yaw": -127.5606936416185,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.688679119457893,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1538,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 537
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2E24161A_234B_7CA8_419F_70D12905BB2F",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -123.81502890173412,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.443010497890697,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 28
          }
         ]
        },
        "roll": 0,
        "pitch": 7.7682612321628355
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 7.7682612321628355,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 342,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 613
          }
         ]
        },
        "hfov": 21.443010497890697,
        "roll": 0,
        "yaw": -123.81502890173412
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DB86DBA_2345_AFE8_41B6_65088F4345AC",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -125.89595375722544,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.17265151063794,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 177,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 176
          }
         ]
        },
        "roll": 0,
        "pitch": -12.854231400754475
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.17265151063794,
        "roll": 0,
        "yaw": -125.89595375722544,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.854231400754475,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 354,
           "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 353
          }
         ]
        }
       }
      ]
     },
     {
      "yaw": 33.91907514450867,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2DAFBAE2_2347_F598_418D_2F460D55091A",
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "pitch": 15.47565746870769
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C63B5DB_235D_FFA8_419F_30851F943185_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 83.7,
      "inertia": false
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3248,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3248
      },
      {
       "height": 1024,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3248,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3248
      },
      {
       "height": 1024,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3248,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3248
      },
      {
       "height": 1024,
       "url": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C63B5DB_235D_FFA8_419F_30851F943185_t.jpg",
  "class": "Panorama",
  "label": "master bed room",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C63B5DB_235D_FFA8_419F_30851F943185_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 26.01156069364162,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.974745698859437,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45.57225433526011,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.60377551583035,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 68.04624277456648,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.475049622142187,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 93.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.27023956697518,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 119.23699421965318,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.641817596569773,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 149.6184971098266,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.520695451899307,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 168.34682080924856,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.974745698859437,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 175.83815028901734,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.771151336823433,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -166.68208092485548,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.55873753263873,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -130.47398843930637,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.6055990555268516,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -110.4971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.391361711645644,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -61.38728323699422,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.226417276914564,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.2485549132948,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.2720631066716845,
     "pitchSpeed": 6.11031746031746
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_2C639217_235D_D4B8_41B8_F172A615E495",
  "partial": false,
  "hfov": 360,
  "vfov": 120.687306501548,
  "pitch": -29.656346749226007,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3080,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3080
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D876BC7_2345_AB99_41B1_EEDD626231EB",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77, this.camera_2DA65049_2253_BEA7_419E_E4BC895A2C99); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "yaw": 170.4277456647399,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 20.199772066033635,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 62
          }
         ]
        },
        "roll": 0,
        "pitch": -0.7664910305048047
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 20.199772066033635,
        "roll": 0,
        "yaw": 170.4277456647399,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.7664910305048047,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1765,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 549
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DE4099C_2345_D7A8_4154_6C2CA03D9652",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 171.46820809248555,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.20270542456075,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "roll": 0,
        "pitch": 13.606436318578922
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 13.606436318578922,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 426,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 504
          }
         ]
        },
        "hfov": 18.20270542456075,
        "roll": 0,
        "yaw": 171.46820809248555
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DBDAA2C_235B_54E8_4196_944103E52BC9",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 170.01156069364163,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.397531531023288,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 168,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 168
          }
         ]
        },
        "roll": 0,
        "pitch": -6.8072865830182545
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.397531531023288,
        "roll": 0,
        "yaw": 170.01156069364163,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.8072865830182545,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 336,
           "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 336
          }
         ]
        }
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C639217_235D_D4B8_41B8_F172A615E495_tcap0",
      "angle": 7,
      "rotate": false,
      "hfov": 83.7,
      "inertia": false
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3080,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3080
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3080,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3080
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3080,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3080
      },
      {
       "height": 1024,
       "url": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C639217_235D_D4B8_41B8_F172A615E495_t.jpg",
  "class": "Panorama",
  "label": "bed room",
  "hfovMin": 60,
  "hfovMax": 81
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C639217_235D_D4B8_41B8_F172A615E495_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.22543352601156,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.55674589147488,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -101.75722543352602,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.688748345663655,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -77.61849710982659,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.2224513287311,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.06936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.188387884634736,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.223172250788934,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 8.947976878612717,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.77250221686406,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.41618497109827,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.556024969417043,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 70.54335260115607,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.68802742360582,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 100.92485549132948,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.305484277873667,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 115.90751445086704,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.688748345663655,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 147.121387283237,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -24.721369945644348,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 157.94219653179192,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.272141755835143,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 173.757225433526,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.057106352503796,
     "pitchSpeed": 6.373715170278637
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -143.58381502890174,
   "class": "PanoramaCameraPosition",
   "pitch": 18.751527702961067
  }
 },
 {
  "id": "panorama_29899765_21B1_816F_418E_4A2367BD721D",
  "partial": false,
  "hfov": 360,
  "vfov": 125.11727078891258,
  "pitch": -27.44136460554371,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2680,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2680
      },
      {
       "height": 1024,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2BD80D4E_21B3_86BC_418B_1B3387D5D94F",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "yaw": -170.21965317919074,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.88769663635111,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 47
          }
         ]
        },
        "roll": 0,
        "pitch": 0.34872641809057636
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 18.88769663635111,
        "roll": 0,
        "yaw": -170.21965317919074,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.34872641809057636,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1862,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 446
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_29899765_21B1_816F_418E_4A2367BD721D_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 72,
      "inertia": false
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2BCD4DD7_21BF_81AB_419F_E25ED0EE61BB",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -165.84971098265896,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.17886739479539,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "roll": 0,
        "pitch": 12.632224129937871
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 12.632224129937871,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 331,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 605
          }
         ]
        },
        "hfov": 25.17886739479539,
        "roll": 0,
        "yaw": -165.84971098265896
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B1E7557_21B2_86AC_41B8_22A33C5359EC",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -169.59537572254337,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.230522013503096,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 177,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 146
          }
         ]
        },
        "roll": 0,
        "pitch": -11.600294279096804
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.230522013503096,
        "roll": 0,
        "yaw": -169.59537572254337,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.600294279096804,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 355,
           "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 292
          }
         ]
        }
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2680,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2680
      },
      {
       "height": 1024,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2680,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2680
      },
      {
       "height": 1024,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2680,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2680
      },
      {
       "height": 1024,
       "url": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_29899765_21B1_816F_418E_4A2367BD721D_t.jpg",
  "class": "Panorama",
  "label": "kitchen",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_29899765_21B1_816F_418E_4A2367BD721D_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -44.73988439306358,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.383054871105942,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 20.601156069364162,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.45503474180896,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 52.64739884393064,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 3.055259812226421,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 79.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 21.376408941761365,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.01156069364161,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.439755740765148,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 117.98843930635839,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.212511412321607,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 144.6242774566474,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 10.133885612274014,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 157.52601156069363,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.123916718257153,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -92.18497109826589,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.209188447649318,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -74.28901734104046,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.041967953537274,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -75.95375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.6922479642693637,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -111.32947976878613,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 5.137208576946301,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -126.72832369942196,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.12723968292944,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -152.9479768786127,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.45503474180896,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -139.63005780346822,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 3.055259812226421,
     "pitchSpeed": 7.171108742004264
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -160.02312138728323,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.101991787868766,
     "pitchSpeed": 7.171108742004264
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_2C805187_235D_B798_4199_249DF1304FA1",
  "partial": false,
  "hfov": 360,
  "vfov": 118.85956273389797,
  "pitch": -30.570218633051013,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3232,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3232
      },
      {
       "height": 1024,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DEBA3E9_234D_5B68_419C_A7F8C60C2F58",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -128.8092485549133,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.934702974671172,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 73
          }
         ]
        },
        "roll": 0,
        "pitch": -3.1903589897607088
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 17.934702974671172,
        "roll": 0,
        "yaw": -128.8092485549133,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.1903589897607088,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1385,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "width": 510
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DC1B23B_234D_F4E8_4172_0D91BC09353B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -125.89595375722544,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.21284573880204,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 16
          }
         ]
        },
        "roll": 0,
        "pitch": 5.134296003397391
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 5.134296003397391,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1127,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "width": 657
          }
         ]
        },
        "hfov": 23.21284573880204,
        "roll": 0,
        "yaw": -125.89595375722544
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DD7ABDA_2345_ABA8_41B4_08092DCB2385",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -128.39306358381504,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.252028898494473,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 176,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 176
          }
         ]
        },
        "roll": 0,
        "pitch": -11.098781233260905
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.252028898494473,
        "roll": 0,
        "yaw": -128.39306358381504,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.098781233260905,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 352,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 352
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DCC5DAA_2345_EFE8_41B5_29C8259C642B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB, this.camera_2D621E3D_2253_82DF_41C0_23E2117D03F7); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "yaw": 19.560693641618496,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.992036280601493,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 88
          }
         ]
        },
        "roll": 0,
        "pitch": -4.855289988392329
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 21.992036280601493,
        "roll": 0,
        "yaw": 19.560693641618496,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.855289988392329,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1415,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 628
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2E53FB47_23BB_D498_41AA_3607DE3DD2AF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C7C86EE_235D_5D68_41A6_41928B407726, this.camera_2D714E7E_2253_835D_4189_7CD17F9407A1); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "yaw": 102.38150289017341,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 39.77955657200316,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 129
          }
         ]
        },
        "roll": 0,
        "pitch": -0.48484611698432645
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 39.77955657200316,
        "roll": 0,
        "yaw": 102.38150289017341,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.48484611698432645,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1803,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 1169
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C805187_235D_B798_4199_249DF1304FA1_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 78.3,
      "inertia": false
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B311035_21D7_BEEF_41AD_7E5B5529520D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 23.514450867052023,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 28.212950891437426,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "roll": 0,
        "pitch": 4.509946878910533
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 4.509946878910533,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 692,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_8_0.png",
           "class": "ImageResourceLevel",
           "width": 798
          }
         ]
        },
        "hfov": 28.212950891437426,
        "roll": 0,
        "yaw": 23.514450867052023
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2ADAEC7C_21D1_875D_41AD_D2E1E98DC742",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 20.184971098265898,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.196742230142222,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 176,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 176
          }
         ]
        },
        "roll": 0,
        "pitch": -12.347479482234618
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.196742230142222,
        "roll": 0,
        "yaw": 20.184971098265898,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.347479482234618,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 352,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_7_0.png",
           "class": "ImageResourceLevel",
           "width": 352
          }
         ]
        }
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2AF2C855_21D2_8EAF_41BF_7A3BC895A27B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 103.83815028901734,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 32.74327628988495,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 43
          }
         ]
        },
        "roll": 0,
        "pitch": 16.372580244160826
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 16.372580244160826,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 352,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "width": 962
          }
         ]
        },
        "hfov": 32.74327628988495,
        "roll": 0,
        "yaw": 103.83815028901734
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2A88A47B_21D3_875B_41B6_C3EC61D8E423",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 105.91907514450867,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.65694845469662,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 148,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "roll": 0,
        "pitch": -5.479639112879186
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 30.65694845469662,
        "roll": 0,
        "yaw": 105.91907514450867,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.479639112879186,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 645,
           "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_0_HS_5_0.png",
           "class": "ImageResourceLevel",
           "width": 868
          }
         ]
        }
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3232,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3232
      },
      {
       "height": 1024,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3232,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3232
      },
      {
       "height": 1024,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3232,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3232
      },
      {
       "height": 1024,
       "url": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C805187_235D_B798_4199_249DF1304FA1_t.jpg",
  "class": "Panorama",
  "label": "upstair hall",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C805187_235D_B798_4199_249DF1304FA1_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -20.60115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.29662349997644,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -42.24277456647399,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.687755487708139,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -68.878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -70.54335260115607,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -112.16184971098266,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 10.12908899929225,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -149.20231213872833,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -170.01156069364163,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.042718246897586,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.342272478129477,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -130.47398843930637,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -9.017617484971378,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -8.115606936416185,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.428643230524145,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 25.595375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 3.0531322551078657,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.0635838150289,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.585763722998053,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.895953757225435,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.377787248265966,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 82.19653179190752,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.702442241424063,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 137.5491329479769,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.8044340061341508,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.08670520231212,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.6929624918132788,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 138.79768786127167,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.11867499108197,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 159.60693641618496,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.012410480866238,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.880390750318535,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 79.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB",
  "partial": false,
  "hfov": 360,
  "vfov": 122.61950286806884,
  "pitch": -28.690248565965582,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2992,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2992
      },
      {
       "height": 1024,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B08E727_21B2_82EB_41AF_ABA8E6C4D542",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C805187_235D_B798_4199_249DF1304FA1, this.camera_2D5FFD7E_2253_815D_41C0_DC52ED5886A4); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "yaw": 161.27167630057804,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.28387285805055,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 199,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 129
          }
         ]
        },
        "roll": 0,
        "pitch": -5.103931119542789
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 37.28387285805055,
        "roll": 0,
        "yaw": 161.27167630057804,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.103931119542789,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1560,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 1010
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 72,
      "inertia": false
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2A9DCF8D_21AF_81BF_41B0_410EFF61FD02",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 162.72832369942196,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 29.502111537524176,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 19
          }
         ]
        },
        "roll": 0,
        "pitch": 3.232739374957017
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 3.232739374957017,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 643,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 772
          }
         ]
        },
        "hfov": 29.502111537524176,
        "roll": 0,
        "yaw": 162.72832369942196
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2B0CB90E_21D1_8EBD_41A5_1DD722D07D79",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 162.52023121387282,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.017776184722877,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 163,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 163
          }
         ]
        },
        "roll": 0,
        "pitch": -15.733186000030043
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 12.017776184722877,
        "roll": 0,
        "yaw": 162.52023121387282,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.733186000030043,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 327,
           "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 326
          }
         ]
        }
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2992,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2992
      },
      {
       "height": 1024,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2992,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2992
      },
      {
       "height": 1024,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2992,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 2992
      },
      {
       "height": 1024,
       "url": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_t.jpg",
  "class": "Panorama",
  "label": "upstairs room",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.4508670520231,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.360993107094329,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.733186000030043,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -113.82658959537572,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.95016647246899,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -95.09826589595376,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9401549889695704,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -72.20809248554913,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.987691167604783,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -65.96531791907515,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.030329502694176,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.06936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 5.525323760944464,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -26.01156069364162,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -29.071858791229733,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.859991958744386,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -4.369942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.030329502694176,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 22.265895953757227,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.865998848844036,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.173410404624278,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 7.609491384569416,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0.6242774566473989,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.312347881905285,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.234187148379984,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.01156069364161,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.861994255444271,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 130.05780346820808,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -9.897516653880178,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 139.21387283236993,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 30.118501719718893,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 163.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.817353623654995,
     "pitchSpeed": 6.72151051625239
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -164.8092485549133,
   "class": "PanoramaCameraPosition",
   "pitch": 25.429124566562752
  }
 },
 {
  "id": "panorama_2C7C86EE_235D_5D68_41A6_41928B407726",
  "partial": false,
  "hfov": 360,
  "vfov": 118.45360824742268,
  "pitch": -30.77319587628866,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_t.jpg",
    "class": "CubicPanoramaFrame",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3328,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3328
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_l.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2E3EC5DA_2346_DFA8_41BB_4AB235EAEB0E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2C805187_235D_B798_4199_249DF1304FA1, this.camera_2DB5D0D1_2253_BF5B_41B5_2E8DB9406605); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "yaw": 64.30057803468208,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.46727367929242,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 92
          }
         ]
        },
        "roll": 0,
        "pitch": -4.271379524580191
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 14.46727367929242,
        "roll": 0,
        "yaw": 64.30057803468208,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.271379524580191,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 915,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "width": 423
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2E01DAC0_2347_7597_41A0_1719233307D2",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 67.00578034682081,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 33.70823778326416,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "roll": 0,
        "pitch": 0.7311663768724765
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "pitch": 0.7311663768724765,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 303,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "width": 980
          }
         ]
        },
        "hfov": 33.70823778326416,
        "roll": 0,
        "yaw": 67.00578034682081
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2DFCA6D1_2345_BDB8_41BA_BB96717EC1F4",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 64.98103079596937,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.842718496513008,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "width": 164
          }
         ]
        },
        "roll": 0,
        "pitch": -13.548561816434308
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 11.842718496513008,
        "roll": 0,
        "yaw": 64.98103079596937,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.548561816434308,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 430,
           "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "width": 354
          }
         ]
        }
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "url": "media/panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_tcap0.png",
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2C7C86EE_235D_5D68_41A6_41928B407726_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 45,
      "inertia": false
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3328,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3328
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_r.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3328,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3328
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_f.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3328,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 3328
      },
      {
       "height": 1024,
       "url": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_b.jpeg",
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2C7C86EE_235D_5D68_41A6_41928B407726_t.jpg",
  "class": "Panorama",
  "label": "upstairs balcony",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2C7C86EE_235D_5D68_41A6_41928B407726_camera",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.696607018427844,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 20.60115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.98618369077239,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -35.16763005780347,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -21.154971941982947,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -25.595375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.1447883361722742,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.664739884393065,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.113485843548895,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -67.21387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.94724349379101,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -65.54913294797687,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.10584813919089305,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -83.86127167630057,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.651153089803945,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -93.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.860303466733063,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -122.56647398843933,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 12.195334067701507,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -139.21387283236993,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.02909171794362,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -167.51445086705203,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 12.195334067701507,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -168.34682080924856,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -21.98872959222506,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.29479768786126,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.733001313956557,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.316122488835498,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 174.58959537572255,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 21.783547045485783,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 137.5491329479769,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.282274094759455,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.02312138728325,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.27463639040145,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 170.4277456647399,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.14988013907761,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 110.08092485549132,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.147334237624942,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 104.2543352601156,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 16.78100114403312,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 68.878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.69915291988051,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 82.19653179190752,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 62.63583815028902,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.65895953757225,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 46.82080924855491,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.484910740046056,
     "pitchSpeed": 5.971649484536083
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0",
  "partial": false,
  "hfov": 360,
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    },
    "thumbnailUrl": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_t.jpg",
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 824,
       "url": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "width": 824
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_t.jpg",
  "class": "Panorama",
  "label": "home",
  "hfovMin": 60,
  "hfovMax": 120
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79_camera",
    "media": "this.panorama_2C7C6777_235D_DB67_41A9_AA43DA2DBF79",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77_camera",
    "media": "this.panorama_2C639E9A_235D_ADA8_4180_D6151F4E2C77",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C63B5DB_235D_FFA8_419F_30851F943185_camera",
    "media": "this.panorama_2C63B5DB_235D_FFA8_419F_30851F943185",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C639217_235D_D4B8_41B8_F172A615E495_camera",
    "media": "this.panorama_2C639217_235D_D4B8_41B8_F172A615E495",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_29899765_21B1_816F_418E_4A2367BD721D_camera",
    "media": "this.panorama_29899765_21B1_816F_418E_4A2367BD721D",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C805187_235D_B798_4199_249DF1304FA1_camera",
    "media": "this.panorama_2C805187_235D_B798_4199_249DF1304FA1",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB_camera",
    "media": "this.panorama_26A3C242_21B1_82A5_41B9_E7D70A5154DB",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C7C86EE_235D_5D68_41A6_41928B407726_camera",
    "media": "this.panorama_2C7C86EE_235D_5D68_41A6_41928B407726",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0_camera",
    "media": "this.panorama_26A3C281_21B1_83A7_41BA_CF6FDDF1D0B0",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D5FFD7E_2253_815D_41C0_DC52ED5886A4",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 216,
     "targetPitch": 0,
     "pitchSpeed": 34.63147528067757
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -20.60115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.29662349997644,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -42.24277456647399,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.687755487708139,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -68.878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -70.54335260115607,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -112.16184971098266,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 10.12908899929225,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -149.20231213872833,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -170.01156069364163,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.042718246897586,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.342272478129477,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -130.47398843930637,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -9.017617484971378,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -8.115606936416185,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.428643230524145,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 25.595375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 3.0531322551078657,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.0635838150289,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.585763722998053,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.895953757225435,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.377787248265966,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 82.19653179190752,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.702442241424063,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 137.5491329479769,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.8044340061341508,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.08670520231212,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.6929624918132788,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 138.79768786127167,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.11867499108197,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 159.60693641618496,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.012410480866238,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.880390750318535,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 79.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -160.43930635838151,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D57FDBE_2253_81DD_41AB_32FC0BC32A9F",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 4.835042752734437,
     "targetPitch": 0,
     "pitchSpeed": 1.934887498459256
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.85549132947978,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 6.623288880972965,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.3063583815029,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.121293035855464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.0115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.193412409714533,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 78.03468208092485,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 27.856324197474216,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.125284726090465,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.7514450867052,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.27265822328796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.360744358087034,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -7.699421965317919,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 24.525651990964217,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.74566473988439,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.782637448875464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.60575474529328,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -66.79768786127168,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.362311732826715,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -64.30057803468208,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.68343318412703,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.35260115606935,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.4599486228354652,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -115.49132947976878,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 31.60333042979796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.94041864203828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -156.6936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.69298393933671,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.17919075144508,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -97.59537572254337,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -34.59377967458828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.13294797687861,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -30.01410539063703,
     "pitchSpeed": 8.861743341404356
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 19.144508670520224,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D68FDFE_2253_815D_41A5_C9DF1BF5D8E6",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 19.383194064737904,
     "targetPitch": 0,
     "pitchSpeed": 5.481362900223172
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.85549132947978,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 6.623288880972965,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.3063583815029,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.121293035855464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.0115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.193412409714533,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 78.03468208092485,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 27.856324197474216,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.125284726090465,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.7514450867052,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.27265822328796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.360744358087034,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -7.699421965317919,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 24.525651990964217,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.74566473988439,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.782637448875464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.60575474529328,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -66.79768786127168,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.362311732826715,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -64.30057803468208,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.68343318412703,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.35260115606935,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.4599486228354652,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -115.49132947976878,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 31.60333042979796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.94041864203828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -156.6936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.69298393933671,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.17919075144508,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -97.59537572254337,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -34.59377967458828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.13294797687861,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -30.01410539063703,
     "pitchSpeed": 8.861743341404356
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 91.76878612716763,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D621E3D_2253_82DF_41C0_23E2117D03F7",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -164.8092485549133,
     "easing": "cubic_in_out",
     "yawSpeed": 216,
     "targetPitch": 25.429124566562752,
     "pitchSpeed": 39.1434034416826
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.4508670520231,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.360993107094329,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.733186000030043,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -113.82658959537572,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.95016647246899,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -95.09826589595376,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9401549889695704,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -72.20809248554913,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.987691167604783,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -65.96531791907515,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.030329502694176,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.06936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 5.525323760944464,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -26.01156069364162,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -29.071858791229733,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.859991958744386,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -4.369942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.030329502694176,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 22.265895953757227,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.865998848844036,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.17341040462428,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 7.609491384569416,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0.6242774566473989,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.312347881905285,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.234187148379984,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.0115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.861994255444271,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 130.05780346820808,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -9.897516653880178,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 139.21387283236993,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 30.118501719718893,
     "pitchSpeed": 6.72151051625239
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 163.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.817353623654995,
     "pitchSpeed": 6.72151051625239
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -18.728323699421964,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D714E7E_2253_835D_4189_7CD17F9407A1",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 156.66334828407128,
     "targetPitch": 0,
     "pitchSpeed": 24.99701101574151
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.696607018427844,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 20.60115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.98618369077239,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -35.16763005780347,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -21.154971941982947,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -25.595375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.1447883361722742,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.664739884393065,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.113485843548895,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -67.21387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.94724349379101,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -65.54913294797687,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.10584813919089305,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -83.86127167630057,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.651153089803945,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -93.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.860303466733063,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -122.56647398843933,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 12.195334067701507,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -139.21387283236993,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.02909171794362,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -167.51445086705203,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 12.195334067701507,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -168.34682080924856,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -21.98872959222506,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.29479768786126,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.733001313956557,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.316122488835498,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 174.58959537572255,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 21.783547045485783,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 137.5491329479769,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.282274094759455,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.02312138728325,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.27463639040145,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 170.4277456647399,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.14988013907761,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 110.08092485549132,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.147334237624942,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 104.2543352601156,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 16.78100114403312,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 68.878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.69915291988051,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 82.19653179190752,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 62.63583815028902,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.65895953757225,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.9396057894330044,
     "pitchSpeed": 5.971649484536083
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 46.82080924855491,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.484910740046056,
     "pitchSpeed": 5.971649484536083
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -115.69942196531792,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D8ACEBD_2253_83DF_418B_DC45E395B19E",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -118.0092485549133,
     "easing": "cubic_in_out",
     "yawSpeed": 128.19462057636787,
     "targetPitch": -2.913912919236924,
     "pitchSpeed": 21.666854640932502
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -94.26589595375722,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.788477225501867,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -69.71098265895954,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.952186480175529,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -56.809248554913296,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.868283514313326,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -33.50289017341041,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 18.700319221311005,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -22.68208092485549,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.703691579718351,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0.6242774566473989,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.116778414770504,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 18.104046242774565,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -6.703691579718351,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 37.664739884393065,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.86740083439201,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 52.64739884393064,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.36952835355634,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 73.45664739884393,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 14.952186480175529,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 86.35838150289017,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.4568036778258853,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 112.9942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.36366631666297,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.3179190751445,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.36952835355634,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.957165837147584,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 161.27167630057804,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.03199276898699,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 164.1849710982659,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -2.122640451663876,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -173.34104046242774,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.286349706337536,
     "pitchSpeed": 6.240049140049139
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -160.02312138728325,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.204936418961364,
     "pitchSpeed": 6.240049140049139
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -24.346820809248555,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D9E1EFC_2253_835D_4198_68620843E39E",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 49.72973289776592,
     "targetPitch": 0,
     "pitchSpeed": 8.721686972528971
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 26.01156069364162,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.974745698859437,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45.57225433526011,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.60377551583035,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 68.04624277456648,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.475049622142187,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 93.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.27023956697518,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 119.23699421965318,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.641817596569773,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 149.6184971098266,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.520695451899307,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 168.34682080924856,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 22.974745698859437,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 175.83815028901734,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.771151336823433,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -166.68208092485548,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.55873753263873,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -130.47398843930637,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.6055990555268516,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -110.4971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.391361711645644,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -61.38728323699422,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.226417276914564,
     "pitchSpeed": 6.11031746031746
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.2485549132948,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.2720631066716845,
     "pitchSpeed": 6.11031746031746
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": 52.4393063583815,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2D932FA2_2253_81E5_41C0_0789D55C9159",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.58381502890174,
     "easing": "cubic_in_out",
     "yawSpeed": 134.71479557245252,
     "targetPitch": 18.751527702961067,
     "pitchSpeed": 23.28047210723705
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.22543352601156,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -10.55674589147488,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -101.75722543352602,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.688748345663655,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -77.61849710982659,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.2224513287311,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.06936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.188387884634736,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.223172250788934,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 8.947976878612717,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 17.77250221686406,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.41618497109827,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.556024969417043,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 70.54335260115607,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 25.68802742360582,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 100.92485549132948,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.305484277873667,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 115.90751445086704,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.688748345663655,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 147.121387283237,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -24.721369945644348,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 157.94219653179192,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.272141755835143,
     "pitchSpeed": 6.373715170278637
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 173.757225433526,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.057106352503796,
     "pitchSpeed": 6.373715170278637
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -9.572254335260112,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2DA65049_2253_BEA7_419E_E4BC895A2C99",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 18.049266150743314,
     "targetPitch": 0,
     "pitchSpeed": 5.156184639889518
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 160.85549132947978,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 6.623288880972965,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.3063583815029,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.121293035855464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 98.0115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.193412409714533,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 78.03468208092485,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 27.856324197474216,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.05780346820809,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 4.125284726090465,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.7514450867052,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 28.27265822328796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.76878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -13.360744358087034,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -7.699421965317919,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 24.525651990964217,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.74566473988439,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 15.782637448875464,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -18.936416184971097,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.60575474529328,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -66.79768786127168,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.362311732826715,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -64.30057803468208,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.68343318412703,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.35260115606935,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.4599486228354652,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -115.49132947976878,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 31.60333042979796,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -116.7398843930636,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -132.1387283236994,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.94041864203828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -156.6936416184971,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 23.69298393933671,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.17919075144508,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -1.7033916353020344,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -97.59537572254337,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -34.59377967458828,
     "pitchSpeed": 8.861743341404356
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.13294797687861,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -30.01410539063703,
     "pitchSpeed": 8.861743341404356
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -85.10982658959536,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2DB5D0D1_2253_BF5B_41B5_2E8DB9406605",
  "initialSequence": {
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 0,
     "easing": "cubic_in_out",
     "yawSpeed": 111.75279467178342,
     "targetPitch": 0,
     "pitchSpeed": 18.32455756404671
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -20.60115606936416,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 9.29662349997644,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -42.24277456647399,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.687755487708139,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -68.878612716763,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -70.54335260115607,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -112.16184971098266,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 10.12908899929225,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -149.20231213872833,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.79401999792387,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -170.01156069364163,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 13.042718246897586,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -17.342272478129477,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -130.47398843930637,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -9.017617484971378,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -8.115606936416185,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.428643230524145,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 25.595375722543352,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 3.0531322551078657,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.0635838150289,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.585763722998053,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.895953757225435,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 11.377787248265966,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 82.19653179190752,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 19.702442241424063,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 137.5491329479769,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.8044340061341508,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.08670520231212,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -0.6929624918132788,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 138.79768786127167,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 20.11867499108197,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 159.60693641618496,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -14.012410480866238,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 165.84971098265896,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 8.880390750318535,
     "pitchSpeed": 6.044721292101635
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 79.69942196531792,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.926039728471572,
     "pitchSpeed": 6.044721292101635
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "yaw": -77.61849710982659,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBorderSize": 0,
  "top": 0,
  "progressRight": 0,
  "toolTipFontColor": "#606060",
  "progressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "minWidth": 100,
  "paddingLeft": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBottom": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "progressBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderColor": "#000000",
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "id": "MainViewer",
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "width": "100%",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "borderRadius": 0,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "borderSize": 0,
  "toolTipFontStyle": "normal",
  "paddingRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "transitionMode": "blending",
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "class": "ViewerArea",
  "left": 0,
  "playbackBarHeadBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressLeft": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1
 }
], 
 "borderRadius": 0,
 "paddingTop": 0,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "existsKey": function(key){    return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && typeof player.resumeCamera !== 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "getKey": function(key){    return window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "unregisterKey": function(key){    delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); }
 },
 "borderSize": 0,
 "paddingRight": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "layout": "absolute",
 "minWidth": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "paddingBottom": 0,
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "gap": 10,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible",
 "height": "100%",
 "scrollBarColor": "#000000",
 "width": "100%"
})