import {createContext} from 'react';
import { AuthContextType } from '../../../types/User';

export const AuthContext = createContext<AuthContextType>(null!);