import React, { useEffect, useState, useContext } from 'react';
import { AdvertService } from '../../../../services/advert.services';
import UserContext from '../../../../../setup/contexts/UserContext';

const AnnonceMessagesComponent = ({ annonceId }) => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [newMessageContent, setNewMessageContent] = useState('');  // État pour le nouveau message

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await AdvertService.getMessagesByAdvertId(annonceId);
        setMessages(fetchedMessages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [annonceId]);

  const handleNewMessageChange = (event) => {
    setNewMessageContent(event.target.value);  // Mettre à jour l'état lors de la modification du texte du message
  };

  const handleNewMessageSubmit = async (event) => {
    event.preventDefault();
    if (newMessageContent.trim() === '') return;  // Ne rien faire si le message est vide

    try {
      const newMessageResponse = await AdvertService.postMessage(annonceId, newMessageContent, user.id);  // Poster le nouveau message
      const newMessage = {
        ...newMessageResponse,
        senderId: { id: user.id },  // Ajouter l'ID de l'utilisateur actuel comme senderId du nouveau message
      };
      setNewMessageContent('');  // Réinitialiser le texte du message
      setMessages(prevMessages => [...prevMessages, newMessage]);  // Ajouter le nouveau message à la liste
    } catch (err) {
      console.error(err);
      // Ici, vous pouvez gérer les erreurs, par exemple en montrant un message à l'utilisateur
    }
  };

  return (
    <div className='annonce-messages-component'>
      <div className='topbar-annonce'>
        <h2>Messages pour l'annonce {annonceId}</h2>
      </div>
      <div className='messages-box'>
        {messages.map((message, index) => {
          // Convertir la date de création du message en une chaîne de caractères lisible
          const createdAt = new Date(message.createdAt).toLocaleString();

          return (
            <div className='message' key={index}>
              <p className="message-date">{createdAt}</p>

              {user.id === message.senderId.id
                ? <div className='box-user'>
                  <p className='message-username-user'>{message.senderId.username}</p>
                  <p className="message-user">{message.content}</p>
                </div>
                : <div className='box-other'>
                  <p className='message-username-other'>{message.senderId.username}</p>
                  <p className="message-other">{message.content}</p>
                </div>
              }

            </div>
          );
        })}
      </div>

      {/* Formulaire pour envoyer un nouveau message */}
      <form onSubmit={handleNewMessageSubmit}>
        <input
          type="text"
          value={newMessageContent}
          onChange={handleNewMessageChange}
          placeholder="Ecrivez votre message ici..."
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default AnnonceMessagesComponent;
