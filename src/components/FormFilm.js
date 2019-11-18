import React from 'react';

class FormFilm extends React.Component {

  state = {
    title: '',
    poster: '',
    comment: '',
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value,});
  }

  submitForm = event => {
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }

    fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Film ajouté avec l'ID ${res.id}!`);
          }
        }).catch(e => {
          console.error(e);
          alert(`Erreur lors de l'ajout d'un film`);
        });
    
    event.preventDefault();
  }

  render() {
    return (
      <div className="FormFilm">
        <h1>Ajouté un film</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Affiche</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Avis</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
} 

export default FormFilm;