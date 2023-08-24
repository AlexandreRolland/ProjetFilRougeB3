import { TokenServices } from './token.services';

async function createAdvert(advert) {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify(advert)
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la création de l\'annonce');
      }

      return response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function getAdverts() {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la récupération des annonces');
      }

      return response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function getAdvertById(advertId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/${advertId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des détails de l\'annonce');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAdvertsByUserId(userId) {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/user/${userId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + TokenServices.getToken()
          },
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la récupération des annonces de l\'utilisateur');
      }

      return response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function getAdvertsByDecoratorId(decoratorId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/decorateur/${decoratorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken()
            },
        });
  
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des annonces du décorateur');
        }
  
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
  }

async function deleteAdvert(advertId) {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/${advertId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + TokenServices.getToken(),
          },
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la suppression de l\'annonce');
      }

      return response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function updateAdvert(advertId, updatedAdvert) {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/${advertId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + TokenServices.getToken(),
          },
          body: JSON.stringify(updatedAdvert)
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la mise à jour de l\'annonce');
      }

      return response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function getMessagesByAdvertId(advertId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/${advertId}/messages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken()
            },
        });
  
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des messages');
        }
  
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
  }

  async function postMessage(annonceId, messageContent, senderId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/message/${annonceId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
            body: JSON.stringify({
                content: messageContent,
                senderId: senderId
            }),
        });

        if (!response.ok) {
            throw response;
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function takeCharge(decorateurId, annonceId, clientId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/annonce/${annonceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
            body: JSON.stringify({
                decorateur: decorateurId,
            }),
        });
  
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la prise en charge de l\'annonce');
        }
  
        // Utilisation de la méthode updateAdvert pour mettre à jour le statut de l'annonce
        await updateAdvert(annonceId, { status: 'En Cours' });
  
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
  }
  


export const AdvertService = {
  getAdverts,
  createAdvert,
  takeCharge,
  getAdvertsByUserId,
  deleteAdvert,
  updateAdvert,
  getMessagesByAdvertId,
  getAdvertsByDecoratorId,
  postMessage,
    getAdvertById
};