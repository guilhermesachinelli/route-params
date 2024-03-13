import { Text } from 'react-native';
import styles from './styles';
export const Title = ({title}) => {
    return (
    <Text style={styles.title}>{title}</Text>
    );
};