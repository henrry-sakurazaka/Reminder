// module.exports = {
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['./src/setupTests.js']
//   };
  
module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};

// module.exports = {
//   transformIgnorePatterns: [
//     "/node_modules/(?!axios)/" // ここで "axios" のトランスパイルを許可する
//   ],
//   // もし必要なら他の設定もここに追加
// };

module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$"
  ],
};
module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
};
module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest" // JavaScript と JSX ファイルを Babel でトランスパイルする
  },
  // 他の設定が必要なら追加
};
module.exports = {
  
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
};

module.exports = {

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};



  