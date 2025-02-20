import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectCurrentUser } from '@/redux/features/authSlice';

export const useAuth = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);
  const isLoading = false; // Add loading state if needed

  return {
    isAuthenticated,
    user,
    isLoading
  };
};