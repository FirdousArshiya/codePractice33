// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, activeLanguageId, isActive} = props
  const {id, language} = languageDetails

  const activeBtnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    activeLanguageId(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickLanguageFilter}
        className={activeBtnClassName}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
