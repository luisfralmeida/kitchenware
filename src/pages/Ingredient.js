import styled from 'styled-components';
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';

const ingredient = {
            name: 'tuna',
            image: 'https://1.bp.blogspot.com/-_QXjE8zwvNo/WaWEY1LFgcI/AAAAAAAAA1k/aar9QC0qFesVlS2c0dgOh4SqZk3TDJSJgCLcBGAs/s1600/Yellowfin%2BTuna%2BSaku%2B-%2BHigh%2BQuality.jpg',
            in_stock: 3,
        }

const Ingredient = () => {
    return (
        <div className="content">
            <StyledIngredient>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={ingredient.image} alt={`${ingredient.name} image`}/>
                    <div className="ingredient_name">
                        <h2>Ingredient: <span>{ingredient.name}</span></h2>
                    </div>
                    <div className="main_details">
                        <p><span>5</span> ingredients</p>
                        <p>|</p>
                        <p><span>240</span> calories</p>
                        <p>|</p>
                        <p><span>20</span> minutes</p>
                        <p>|</p>
                        <p>Auto-order: <span>Yes</span></p>
                    </div>
                </StyledPhoto>
                <StyledDetails>
                    {/* Delete everything: just for testing

                    <h5>Current stock: <span>{ingredient.in_stock} kg</span></h5>
                    <h5>Forecasted consumption</h5>
                    <p>7 days: 1.2 kg</p>
                    <p>30 days: 5.1 kg</p>
                    <h5>Recent consumption</h5>
                    <p>7 days: 1.1 kg</p>
                    <p>30 days: 6.3 kg</p>
                    <h5>Recent consumption</h5>
                    <p>None</p>
                    <h5>Next order estimated in:</h5>
                    <p>11 days</p>
                    <p></p>
                    */}
                </StyledDetails>
                <StockDetails />
                <StockManagement />
                {/* buttons */}
                <div></div>
            </StyledIngredient>
        </div>
    )
}

const StyledIngredient = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: 1px solid yellow;
    background-color: #000000dd;
    // padding-left: 1rem;
    // padding-right: 1rem;
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc(100vw - 10rem);
    height: 40vh;
    img {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }
    .gradient_overlay {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        // background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
        background: linear-gradient(to bottom,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.95) 100%); /* W3C */
        z-index: 3;
  
    }
    .ingredient_name {
        position: absolute;
        left: 0;
        top: 50%;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 5;
        h2 {
            padding-left: 2.5rem;
            display: block;
            font-size: 1.5rem;
            font-style: italic;
            text-transform: capitalize;
            color: #b1b1b1;
            z-index: 5;
        }
        span {
            font-size: 3rem;
            font-style: normal;
        }
    }

    .main_details {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding-left: 2rem;
        padding-right: 2rem;
        z-index: 4;
        color: white;
        p {
            padding: 1rem;
            font-size: 1rem;
            font-style: italic;
        }
        p span {
            font-size: 2rem;
            color: white;
            font-weight: 100;
            font-style: normal;
        }
    }
`

const StyledDetails = styled.div`
    width: 35%;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
`

const StyledStockDetails = styled.div`
    color: white;
`

const StyledStockManagement = styled.div`
    color: white;
`

export default Ingredient;