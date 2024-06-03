const rawData = [
  "-117.032351,48.999188 -117.035545,46.410012 -116.915989,45.995413 -118.987129,45.999855 -121.084933,45.647893 -122.262625,45.544321 -123.547659,46.259109 -124.080983,46.735003 -124.412106,47.691199 -124.050734,48.177747 -122.760448,48.14324 -122.75802,49.002357 -118.8366130356,49.0003077593 -117.032351,48.999188",
  "-82.593673,38.421809 -81.678331,39.273755 -80.829764,39.711839 -80.518991,40.638801 -80.519342,39.721403 -79.476662,39.721078 -79.091329,39.472407 -78.08226,39.671166 -77.719519,39.321314 -78.999014,38.840074 -79.297758,38.416438 -79.787542,38.273298 -80.291644,37.536505 -81.560625,37.206663 -81.968297,37.537798 -82.626182,38.134835 -82.593673,38.421809",
  "-104.057698,44.997431 -104.053127,43.000585 -104.053249,41.001406 -106.1905540787,40.9977466126 -109.050076,41.000659 -111.046723,40.997959 -111.046689,42.001567 -111.048974,44.474072 -111.044275,45.001345 -108.6214934947,44.999676371 -106.263586,44.993788 -104.057698,44.997431",
  "-79.761951,42.26986 -78.851355,42.791758 -78.547395,43.369541 -76.952174,43.270692 -76.417581,43.521285 -76.286547,44.203773 -74.834669,45.014683 -73.343124,45.01084 -73.43688,44.042578 -73.242042,43.534925 -73.264957,42.74594 -73.487314,42.049638 -73.657336,40.985171 -74.260611,40.502436 -73.893979,40.997197 -74.694914,41.357423 -75.341125,41.992772 -79.761313,41.998808 -79.761951,42.26986",
  "-123.547659,46.259109 -122.262625,45.544321 -121.084933,45.647893 -118.987129,45.999855 -116.915989,45.995413 -116.463504,45.615785 -117.243027,44.390974 -117.023577,43.823811 -117.026197,41.99989 -119.999168,41.99454 -124.211605,41.99846 -124.552441,42.840568 -124.233534,43.55713 -123.975425,45.145476 -123.95919,46.141675 -123.547659,46.259109",
  "-89.733095,36.000608 -89.539232,36.497934 -88.050466,36.500053 -87.853204,36.633247 -83.675413,36.600814 -81.677535,36.588117 -82.02874,36.124322 -82.779397,35.992511 -83.771736,35.562118 -84.321869,34.988408 -85.605165,34.984678 -88.200064,34.995634 -90.309297,34.995694 -89.733095,36.000608",
  "-103.002434,36.500397 -100.000406,36.499702 -100.000381,34.560509 -99.189511,34.214312 -98.099328,34.104295 -97.865765,33.849393 -96.952313,33.944582 -96.363135,33.694215 -95.226393,33.961954 -94.485875,33.637867 -94.043428,33.551425 -94.042964,33.019219 -94.041833,31.992402 -93.535097,31.185614 -93.837971,29.690619 -94.594853,29.467903 -95.38239,28.866348 -96.886459,28.030734 -97.378697,27.060044 -97.145567,25.971132 -97.422636,25.840378 -99.110855,26.426278 -99.556812,27.614336 -100.267604,28.250269 -100.674656,29.099777 -101.400636,29.738079 -102.301381,29.877674 -102.677192,29.738261 -102.871347,29.241625 -103.28119,28.982138 -104.539761,29.676074 -105.00124,30.672583 -106.528242,31.783148 -106.618486,32.000495 -103.064423,32.000518 -103.043516,34.079382 -103.002434,36.500397",
  "-94.042964,33.019219 -91.166073,33.004106 -91.034707,32.101053 -91.359514,31.799362 -91.560365,31.049508 -89.728147,31.002431 -89.524504,30.180753 -89.185799,30.063934 -89.482318,29.406222 -90.223587,29.085075 -90.867853,29.056064 -91.394307,29.497115 -92.323465,29.531497 -93.17693,29.770487 -93.837971,29.690619 -93.535097,31.185614 -94.041833,31.992402 -94.042964,33.019219",
  "-79.476662,39.721078 -75.788596,39.722199 -75.693721,38.460128 -75.048939,38.451263 -75.242266,38.027209 -75.669711,37.950796 -75.888513,38.241423 -76.864292,38.268945 -77.1302,38.635017 -77.039006,38.791645 -77.119759,38.934343 -77.719519,39.321314 -78.08226,39.671166 -79.091329,39.472407 -79.476662,39.721078",
  "-97.229039,49.000687 -95.153711,48.998903 -93.467504,48.545664 -92.954876,48.631493 -91.542512,48.053268 -90.843624,48.243576 -89.974296,47.830514 -90.86827,47.5569 -92.01529,46.706469 -92.646768,45.437929 -92.805287,44.768361 -91.440536,44.001501 -91.217706,43.50055 -93.97076,43.499605 -96.45326,43.50039 -96.457781,45.30761 -96.563672,45.935245 -96.790523,46.63688 -96.854073,47.57201 -97.146745,48.168556 -97.229039,49.000687",
  "-95.765645,40.585208 -94.533878,40.570739 -91.729115,40.61364 -91.419422,40.378264 -91.367753,39.729029 -90.113327,38.849306 -90.372519,38.323354 -89.521948,37.696475 -89.132915,36.982057 -89.539232,36.497934 -89.733095,36.000608 -90.153871,36.495344 -92.350277,36.497787 -94.617919,36.499414 -94.617964,36.998905 -94.607354,39.113444 -95.30829,39.999998 -95.765645,40.585208",
  "-116.915989,45.995413 -117.035545,46.410012 -117.032351,48.999188 -116.049193,49.000912 -116.049153,47.999923 -115.71034,47.417784 -114.943281,46.867971 -114.320665,46.646963 -114.506341,45.559216 -113.971565,45.700636 -113.006846,44.471715 -111.048974,44.474072 -111.046689,42.001567 -114.041723,41.99372 -117.026197,41.99989 -117.023577,43.823811 -117.243027,44.390974 -116.463504,45.615785 -116.915989,45.995413",
  "-91.419422,40.378264 -90.952233,40.954047 -91.027787,41.423603 -90.339528,41.598633 -90.161159,42.106372 -90.642843,42.508481 -87.800477,42.49192 -87.524044,41.708335 -87.498948,38.757774 -88.02803,37.799224 -88.062294,37.487837 -88.931745,37.227593 -89.132915,36.982057 -89.521948,37.696475 -90.372519,38.323354 -90.113327,38.849306 -91.367753,39.729029 -91.419422,40.378264",
  "-96.45326,43.50039 -93.97076,43.499605 -91.217706,43.50055 -91.138,42.903772 -90.642843,42.508481 -90.161159,42.106372 -90.339528,41.598633 -91.027787,41.423603 -90.952233,40.954047 -91.419422,40.378264 -91.729115,40.61364 -94.533878,40.570739 -95.765645,40.585208 -95.922529,41.455766 -96.445508,42.49063 -96.621875,42.779255 -96.45326,43.50039",
  "-89.132915,36.982057 -88.931745,37.227593 -88.062294,37.487837 -88.02803,37.799224 -86.722247,37.892648 -85.816164,38.282969 -84.786406,38.88222 -84.820157,39.10548 -84.212904,38.805707 -82.593673,38.421809 -82.626182,38.134835 -81.968297,37.537798 -83.136395,36.743088 -83.675413,36.600814 -87.853204,36.633247 -88.050466,36.500053 -89.539232,36.497934 -89.132915,36.982057",
  "-124.211605,41.99846 -119.999168,41.99454 -120.001014,38.999574 -117.68061,37.353399 -114.633487,35.001857 -114.139055,34.259538 -114.534987,33.928499 -114.719633,32.718763 -117.124862,32.534156 -117.445583,33.268517 -118.519514,34.027509 -119.109784,34.094566 -119.616862,34.420995 -120.451425,34.447094 -120.89679,35.247877 -122.397065,37.187249 -123.004122,38.297012 -123.71054,38.91323 -123.851714,39.832041 -124.409591,40.438076 -124.118147,40.989263 -124.211605,41.99846",
  "-109.050076,41.000659 -106.1905540787,40.9977466126 -104.053249,41.001406 -102.051614,41.002377 -102.051744,40.003078 -102.04224,36.993083 -103.002199,37.000104 -106.0063164108,36.9953866288 -109.045223,36.999084 -109.060062,38.275489 -109.050076,41.000659",
  "-83.108606,35.000659 -82.411301,35.202483 -81.04287,35.149248 -80.796997,34.823874 -79.675299,34.804744 -78.541087,33.851112 -79.215453,33.155569 -80.885517,32.0346 -81.113334,32.113205 -81.50203,33.015113 -82.556835,33.945353 -83.108606,35.000659",
  "-104.057698,44.997431 -104.045443,45.94531 -99.490254,45.940362 -96.563672,45.935245 -96.457781,45.30761 -96.45326,43.50039 -96.621875,42.779255 -96.445508,42.49063 -97.237868,42.853139 -98.49855,42.99856 -102.0824863192,42.9991405485 -104.053127,43.000585 -104.057698,44.997431",
  "-73.264957,42.74594 -72.458519,42.726853 -71.294205,42.69699 -70.817296,42.87229 -70.974897,42.355843 -70.321588,41.630508 -71.12057,41.497448 -71.381401,42.018798 -71.799242,42.008065 -73.487314,42.049638 -73.264957,42.74594",
  "-83.453832,41.732647 -84.806082,41.696089 -86.824828,41.76024 -86.356218,42.254166 -86.208309,42.762789 -86.540787,43.644593 -86.514702,44.058119 -86.058862,44.911012 -85.380659,45.046319 -84.718904,45.777599 -83.385104,45.274195 -83.336988,44.332919 -82.633641,43.831224 -82.415937,43.005555 -83.453832,41.732647 -90.418136,46.566094 -89.415154,46.843983 -88.217822,47.448738 -88.143688,46.966665 -87.366767,46.507303 -86.138295,46.672935 -84.117925,46.517619 -84.080071,45.970822 -85.540858,46.079581 -87.172241,45.661788 -87.590208,45.095264 -88.115346,45.922211 -90.120489,46.336852 -90.418136,46.566094 -83.453832,41.732647",
  "-73.487314,42.049638 -71.799242,42.008065 -71.860513,41.320248 -72.935646,41.258497 -73.657336,40.985171 -73.487314,42.049638",
  "-75.415062,39.801919 -75.528088,39.498114 -75.048939,38.451263 -75.693721,38.460128 -75.788596,39.722199 -75.415062,39.801919",
  "-85.605165,34.984678 -84.321869,34.988408 -83.108606,35.000659 -82.556835,33.945353 -81.50203,33.015113 -81.113334,32.113205 -80.885517,32.0346 -81.130634,31.722692 -81.444124,30.709714 -82.218607,30.564395 -84.864693,30.711542 -85.002499,31.000682 -85.141831,31.839261 -84.891841,32.263398 -85.1844,32.861317 -85.605165,34.984678",
  "-94.617919,36.499414 -92.350277,36.497787 -90.153871,36.495344 -89.733095,36.000608 -90.309297,34.995694 -90.89456,34.22438 -91.215671,33.529423 -91.166073,33.004106 -94.042964,33.019219 -94.043428,33.551425 -94.485875,33.637867 -94.431515,35.369591 -94.617919,36.499414",
  "-87.524044,41.708335 -86.824828,41.76024 -84.806082,41.696089 -84.820157,39.10548 -84.786406,38.88222 -85.816164,38.282969 -86.722247,37.892648 -88.02803,37.799224 -87.498948,38.757774 -87.524044,41.708335",
  "-102.051744,40.003078 -98.076034,40.002301 -95.30829,39.999998 -94.607354,39.113444 -94.617964,36.998905 -97.4623460299,36.9988242388 -99.129449,36.999422 -102.04224,36.993083 -102.051744,40.003078",
  "-71.083924,45.305451 -70.259117,45.890755 -69.997086,46.69523 -69.219996,47.457159 -68.361559,47.355605 -67.789761,47.065744 -67.803313,45.677886 -67.417417,45.501985 -66.949895,44.817419 -68.125624,44.387127 -68.438518,44.11618 -70.168227,43.675136 -70.703818,43.059825 -70.984335,43.376128 -71.083924,45.305451",
  "-81.968297,37.537798 -81.560625,37.206663 -80.291644,37.536505 -79.787542,38.273298 -79.297758,38.416438 -78.999014,38.840074 -77.719519,39.321314 -77.119759,38.934343 -77.039006,38.791645 -77.1302,38.635017 -77.322622,38.467131 -76.236725,37.889174 -76.267962,36.964547 -75.867044,36.550754 -78.509965,36.541065 -81.677535,36.588117 -83.675413,36.600814 -83.136395,36.743088 -81.968297,37.537798",
  "-92.01529,46.706469 -91.167601,46.84476 -90.418136,46.566094 -90.120489,46.336852 -88.115346,45.922211 -87.590208,45.095264 -87.264877,45.081361 -87.889207,43.307652 -87.800477,42.49192 -90.642843,42.508481 -91.138,42.903772 -91.217706,43.50055 -91.440536,44.001501 -92.805287,44.768361 -92.646768,45.437929 -92.01529,46.706469",
  "-88.200064,34.995634 -85.605165,34.984678 -85.1844,32.861317 -84.891841,32.263398 -85.141831,31.839261 -85.002499,31.000682 -87.598937,30.997422 -87.518324,30.280435 -88.395023,30.369425 -88.46866,31.933173 -88.097888,34.892202 -88.200064,34.995634",
  "-114.719633,32.718763 -114.534987,33.928499 -114.139055,34.259538 -114.633487,35.001857 -114.736165,36.104367 -114.046838,36.194069 -114.0506,37.000396 -111.278286,37.000465 -109.045223,36.999084 -109.045851,34.959718 -109.050044,31.332502 -111.074825,31.332239 -114.813613,32.494277 -114.719633,32.718763",
  "-85.002499,31.000682 -84.864693,30.711542 -82.218607,30.564395 -81.444124,30.709714 -81.256711,29.784693 -80.583884,28.597705 -80.547675,28.048795 -80.046263,26.859238 -80.109953,25.81826 -80.358183,25.153228 -81.079859,25.118797 -81.38381,25.776751 -81.727086,25.907207 -81.923611,26.436658 -82.691821,27.437218 -82.859624,28.174135 -82.656694,28.544814 -82.823659,29.098902 -83.679219,29.918513 -84.06299,30.101378 -85.045074,29.586991 -85.999937,30.27078 -86.632953,30.396299 -87.518324,30.280435 -87.598937,30.997422 -85.002499,31.000682",
  "-116.049193,49.000912 -111.500812,48.996963 -109.000708,48.999234 -104.048736,48.999877 -104.045443,45.94531 -104.057698,44.997431 -106.263586,44.993788 -108.6214934947,44.999676371 -111.044275,45.001345 -111.048974,44.474072 -113.006846,44.471715 -113.971565,45.700636 -114.506341,45.559216 -114.320665,46.646963 -114.943281,46.867971 -115.71034,47.417784 -116.049153,47.999923 -116.049193,49.000912",
  "-114.041723,41.99372 -111.046689,42.001567 -111.046723,40.997959 -109.050076,41.000659 -109.060062,38.275489 -109.045223,36.999084 -111.278286,37.000465 -114.0506,37.000396 -114.049104,39.005509 -114.041723,41.99372",
  "-73.343124,45.01084 -71.501088,45.013377 -71.579974,44.501778 -72.046302,44.291983 -72.37944,43.574069 -72.458519,42.726853 -73.264957,42.74594 -73.242042,43.534925 -73.43688,44.042578 -73.343124,45.01084",
  "-71.860513,41.320248 -71.799242,42.008065 -71.381401,42.018798 -71.12057,41.497448 -71.860513,41.320248",
  "-84.806082,41.696089 -83.453832,41.732647 -82.460599,41.386316 -81.738755,41.48855 -80.519425,41.977523 -80.518991,40.638801 -80.829764,39.711839 -81.678331,39.273755 -82.593673,38.421809 -84.212904,38.805707 -84.820157,39.10548 -84.806082,41.696089",
  "-103.002199,37.000104 -102.04224,36.993083 -99.129449,36.999422 -97.4623460299,36.9988242388 -94.617964,36.998905 -94.617919,36.499414 -94.431515,35.369591 -94.485875,33.637867 -95.226393,33.961954 -96.363135,33.694215 -96.952313,33.944582 -97.865765,33.849393 -98.099328,34.104295 -99.189511,34.214312 -100.000381,34.560509 -100.000406,36.499702 -103.002434,36.500397 -103.002199,37.000104",
  "-80.519425,41.977523 -79.761951,42.26986 -79.761313,41.998808 -75.341125,41.992772 -74.694914,41.357423 -75.186737,40.569406 -74.721604,40.15381 -75.415062,39.801919 -75.788596,39.722199 -79.476662,39.721078 -80.519342,39.721403 -80.518991,40.638801 -80.519425,41.977523",
  "-75.415062,39.801919 -74.721604,40.15381 -75.186737,40.569406 -74.694914,41.357423 -73.893979,40.997197 -74.260611,40.502436 -74.101443,39.756173 -74.885914,39.143627 -75.528088,39.498114 -75.415062,39.801919",
  "-109.045223,36.999084 -106.0063164108,36.9953866288 -103.002199,37.000104 -103.002434,36.500397 -103.043516,34.079382 -103.064423,32.000518 -106.618486,32.000495 -106.528242,31.783148 -108.208394,31.783599 -108.208573,31.333395 -109.050044,31.332502 -109.045851,34.959718 -109.045223,36.999084",
  "-81.677535,36.588117 -78.509965,36.541065 -75.867044,36.550754 -75.458659,35.596597 -75.533627,35.225825 -76.535946,34.588577 -77.136843,34.632926 -77.635034,34.359555 -77.960172,33.853315 -78.541087,33.851112 -79.675299,34.804744 -80.796997,34.823874 -81.04287,35.149248 -82.411301,35.202483 -83.108606,35.000659 -84.321869,34.988408 -83.771736,35.562118 -82.779397,35.992511 -82.02874,36.124322 -81.677535,36.588117",
  "-104.048736,48.999877 -99.91378,48.999049 -97.229039,49.000687 -97.146745,48.168556 -96.854073,47.57201 -96.790523,46.63688 -96.563672,45.935245 -99.490254,45.940362 -104.045443,45.94531 -104.048736,48.999877",
  "-91.166073,33.004106 -91.215671,33.529423 -90.89456,34.22438 -90.309297,34.995694 -88.200064,34.995634 -88.097888,34.892202 -88.46866,31.933173 -88.395023,30.369425 -89.524504,30.180753 -89.728147,31.002431 -91.560365,31.049508 -91.359514,31.799362 -91.034707,32.101053 -91.166073,33.004106",
  "-104.053127,43.000585 -102.0824863192,42.9991405485 -98.49855,42.99856 -97.237868,42.853139 -96.445508,42.49063 -95.922529,41.455766 -95.765645,40.585208 -95.30829,39.999998 -98.076034,40.002301 -102.051744,40.003078 -102.051614,41.002377 -104.053249,41.001406 -104.053127,43.000585",
  "-119.999168,41.99454 -117.026197,41.99989 -114.041723,41.99372 -114.049104,39.005509 -114.0506,37.000396 -114.046838,36.194069 -114.736165,36.104367 -114.633487,35.001857 -117.68061,37.353399 -120.001014,38.999574 -119.999168,41.99454",
  "-71.501088,45.013377 -71.083924,45.305451 -70.984335,43.376128 -70.703818,43.059825 -70.817296,42.87229 -71.294205,42.69699 -72.458519,42.726853 -72.37944,43.574069 -72.046302,44.291983 -71.579974,44.501778 -71.501088,45.013377"
];

const stateNames = [
  "Washington", "West Virginia", "Wyoming", "New York", "Oregon", "Tennessee", "Texas",
  "Louisiana", "Maryland", "Minnesota", "Missouri", "Idaho", "Illinois", "Iowa",
  "Kentucky", "California", "Colorado", "South Carolina", "South Dakota", "Massachusetts", "Michigan",
  "Connecticut", "Delaware", "Georgia", "Arkansas", "Indiana", "Kansas", "Maine",
  "Virginia", "Minnesota", "Alabama", "Arizona", "Florida", "Montana",
  "Utah", "Vermont", "Ohio", "Ohio", "Oklahoma", "Pennsylvania", "New Jersey",
  "New Mexico", "North Carolina", "North Dakota", "Mississippi", "Nebraska", "Nevada", "New Hampshire"
];


function parseCoordinates(data) {
  return data.map(stateData => {
      return stateData.split(" ").map(pair => {
          const [x, y] = pair.split(",");
          return [parseFloat(x), parseFloat(y)];
      });
  });
}

const coordinates = parseCoordinates(rawData);

function calculateBounds(coordinates) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  coordinates.forEach(state => {
      state.forEach(([x, y]) => {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
      });
  });
  return { minX, maxX, minY, maxY };
}

const bounds = calculateBounds(coordinates);

function scaleCoordinates(coordinates, bounds, width, height) {
  const scaleX = width / (bounds.maxX - bounds.minX);
  const scaleY = height / (bounds.maxY - bounds.minY);
  return coordinates.map(state => {
      return state.map(([x, y]) => [
          (x - bounds.minX) * scaleX,
          height - ((y - bounds.minY) * scaleY)
      ]);
  });
}


const scaledCoordinates = scaleCoordinates(coordinates, bounds, 800, 500);

const svg = d3.select("#map svg");

const lineGenerator = d3.line()
  .x(d => d[0])
  .y(d => d[1]);

  scaledCoordinates.forEach((state, index) => {
      svg.append("path")
         .attr("d", lineGenerator(state))
         .attr("fill", "none")
         .attr("stroke", "black");
  
      // Calcular el centro del estado para la etiqueta
      const centroid = d3.polygonCentroid(state);
      svg.append("text")
         .attr("x", centroid[0])
         .attr("y", centroid[1])
         .attr("text-anchor", "middle") // Centra el texto en el punto
         .attr("font-size", "10px") // Tamaño del texto, ajustable según necesidad
         .text(stateNames[index]);
  });
