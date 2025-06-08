import { Text, TouchableOpacity } from 'react-native';

interface SetGameButtonProps {
  title?: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const SetGameButton: React.FC<SetGameButtonProps> = ({
  title = '',
  handlePress = () => {},
  containerStyles = '',
  textStyles = '',
  isLoading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center \
         ${containerStyles} ${isLoading || disabled ? 'opacity-50' : ''}`}
      disabled={isLoading || disabled}
    >
      <Text className={`text-text text-lg font-semibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SetGameButton;