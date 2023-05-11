import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = ({data})=>{
    return (
        <div>
            {
                data.map((character, index)=>{
                    return <CharacterCard key={index}{...character}/>;
                })
            }
        </div>
    );
};

CharacterList.propTypes ={
    data: PropTypes.array.isRequired,
};

export default CharacterList;
