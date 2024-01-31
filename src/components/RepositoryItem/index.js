// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, imageUrl, starsCount, forksCount, issuesCount} = repoDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} alt={name} className="repository-img" />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-icon"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-icon"
        />
        <p className="stars-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="issues"
          className="stars-icon"
        />
        <p className="stars-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
