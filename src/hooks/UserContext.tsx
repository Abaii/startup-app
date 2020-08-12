import { createContext } from 'react';
import { User } from '../App';

type UserContextValue = { user: User | null; setUser: React.Dispatch<React.SetStateAction<User | null>>; } | null
export const UserContext = createContext<UserContextValue>(null);
