// legacy browser support
// if using copyright asset permitteed, replace localPath null value to actually local path

var coverImages = [
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_01.jpg'
  },
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_03.jpg'
  }
];

function getRandomCover () {
  var idx = Math.floor(Math.random() * coverImages.length);
  return coverImages[idx]['localPath'] === null ? [false, coverImages[idx]['remotePath']] : [true, coverImages[idx]['localPath']];
}