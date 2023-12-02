// import React, { useState} from 'react';

  
// const Language = (/*{onSelectLanguage}*/) =>{
//     const languages = ['Hebrew', 'English', 'Spanish', 'French', 'German', 'Italian'];
//     const [selectedLanguage, setSelectedLanguage] = useState('');

//   const handleLanguageChange = (language: string) => {
//     setSelectedLanguage(language);

//     // onSelectLanguage && onSelectLanguage(language);
//   };
//   return (
//     // <div>
//     //   <h2>Select a Language:</h2>
//     //   <button onClick={() => handleLanguageChange('he')}>Hebrew</button>
//     //   <button onClick={() => handleLanguageChange('en')}>English</button>
//     //   <button onClick={() => handleLanguageChange('sp')}>Spanish</button>
//     //   <button onClick={() => handleLanguageChange('fr')}>French</button>
//     //   <button onClick={() => handleLanguageChange('ru')}>Russian</button>
//     //   {/* Add more buttons for other languages */}
//     //   {selectedLanguage && (
//     //     <p>Selected language: {selectedLanguage}</p>
//     //   )}
//     // </div>
//     <div className="language-selector">
//       <h2>Select a Language:</h2>
//       <ul>
//         {languages.map((language) => (
//           <li key={language} onClick={() => handleLanguageChange(language)} className={language === selectedLanguage ? 'selected' : ''}>
//             {language}
//           </li>
//         ))}
//       </ul>
//       {selectedLanguage && (
//         <p>Selected language: {selectedLanguage}</p>
//       )}
//     </div>
//   );
// }

// export default Language;

import React, { useState } from 'react';
import './Language.css'

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = ['English', 'Hebrew', 'Spanish', 'French', 'German', 'Italian']; // Add more languages as needed

  const handleLanguageChange = (language : string) => {
    setSelectedLanguage(language);
    // Save the selected language to your storage method (e.g., localStorage, state management)
    // For example: localStorage.setItem('selectedLanguage', language);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={toggleDropdown}>
        {selectedLanguage || 'Select Language'}
      </div>
      {showDropdown && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <div
              key={language}
              className="dropdown-option"
              onClick={() => handleLanguageChange(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
