const params = {
    headers:{
        Accept: 'Application/json',
        'Content-Type' : 'Application/json'
    }
}

const URL = "https://api-noticias.herokuapp.com/api"

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
      .then((response) => response.json())
      .catch((err) => {
        console.error('Ocorreu um err', err)
      })
  }

  function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}/${id}`, params)
      .then((response) => response.json())
      .catch((err) => {
        console.error('Ocorreu um err', err)
      })
  }
  
  
export default{
    getNews,
    getNewsById
}