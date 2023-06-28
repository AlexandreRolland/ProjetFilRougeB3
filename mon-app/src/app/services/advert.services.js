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
              'Authorization': 'Bearer ' + TokenServices.getToken()
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

async function takeCharge(decorateurId, annonceId) {
  try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/chat`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + TokenServices.getToken(),
          },
          body: JSON.stringify({
              decorateurId,
              annonceId,
          }),
      });

      if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la prise en charge de l\'annonce');
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


export const AdvertService = {
  getAdverts,
  createAdvert,
  takeCharge,
  getAdvertsByUserId,
  deleteAdvert,
  updateAdvert,
};