const HpForm = () => {

    return (

        <section className="container">

            <form className="hp-form">
                <div className="select-room">
                    <label for="select-room">Sélectionnez votre pièce :</label>
                    <select name="rooms" id="select-room">
                        <option value="bathroom">Salle-de-bain</option>
                        <option value="livingRoom">Salon</option>
                        <option value="bedroom">Chambre</option>
                        <option value="kitchen">Cuisine</option>
                        <option value="office">Bureau</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <div className="select-dimensions">
                    <label>Sélectionnez votre pièce :</label>
                    <div>
                        <input type="text" placeholder="Longueur"/>
                        <input type="text" placeholder="Largeur"/>
                    </div>

                </div>
                <div className="submit-btn">
                    <button>Contacter un expert</button>
                </div>
            </form>

        </section>
    );
};

export default HpForm;