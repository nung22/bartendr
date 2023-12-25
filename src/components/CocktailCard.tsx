import { Card } from "antd";
import { Drinks } from "../typings";

const CocktailCard = ({drinks} : Drinks) => {
  const drink = drinks[0];
  
  return (
    <Card hoverable cover={<img alt={drink.strImageSource} src={drink.strDrinkThumb} />}>
      <Card.Meta title={drink.strDrink} description={drink.strDrink} />
      <p>{drink.strInstructions}</p>
    </Card>
  );
};

export default CocktailCard;
