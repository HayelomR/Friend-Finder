// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Multiple dummy friends makes it easier to test!
// all the dummy dates which are create
// ===============================================================================

var friends = [
  {
    "name": "Taylor Swift",
    "photo": "http://www.hdwallpapers.in/walls/taylor_swift_2016_4k_5k-wide.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
  },
  {
    "name": "katy Perry",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Katy_Perry_UNICEF_2012.jpg",
    "scores":[
        3,
        2,
        2,
        4,
        1,
        1,
        5,
        1,
        3,
        1
    ]
  },
  {
    "name": "Rihanna",
    "photo": "http://assets4.capitalxtra.com/2017/07/rihanna-grammys-2017-1486951728-editorial-short-form-0.jpg",
    "scores":[
        5,
        4,
        3,
        5,
        5,
        5,
        4,
        5,
        4,
        3
    ]
  },
  {
    "name": "Britney Spears",
    "photo": "http://www.billboard.com/files/media/Britney-Spears-mtv-vmas-04-billboard-white-carpet-2016-bb-1548.jpg",
    "scores":[
        5,
        5,
        4,
        3,
        2,
        5,
        4,
        5,
        5,
        4
    ]
  }



];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;