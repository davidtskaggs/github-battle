var React = require('react');

class Popular extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <ul>
          {languages.map(function(lang) {
            return (
              <li>
                {lang}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Popular;
