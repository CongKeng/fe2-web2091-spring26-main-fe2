import { createContext, useContext, useState } from "react";
import { Avatar, Button, ConfigProvider, theme } from "antd";

/* ================= USER CONTEXT ================= */

interface User {
  name: string;
  avatar: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | null>(null);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser phải dùng trong Provider");
  return context;
};

/* ================= THEME CONTEXT ================= */

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme phải dùng trong Provider");
  return context;
};

/* ================= HEADER ================= */

const Header = () => {
  const { user, setUser } = useUser();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <h2>LAB 7</h2>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Button onClick={toggleTheme}>
          {isDark ? "Light" : "Dark"}
        </Button>

        {user ? (
          <>
            <Avatar src={user.avatar} />
            <span>{user.name}</span>
            <Button danger onClick={() => setUser(null)}>
              Logout
            </Button>
          </>
        ) : (
          <span>Chưa đăng nhập</span>
        )}
      </div>
    </div>
  );
};

/* ================= LOGIN ================= */

const Login = () => {
  const { setUser } = useUser();

  return (
    <div style={{ padding: 20 }}>
      <Button
        type="primary"
        onClick={() =>
          setUser({
            name: "Nguyễn Công",
            avatar: "https://i.pravatar.cc/150?img=4",
          })
        }
      >
        Login
      </Button>
    </div>
  );
};

/* ================= APP ================= */

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <ConfigProvider
          theme={{
            algorithm: isDark
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          }}
        >
          <Header />
          <Login />
        </ConfigProvider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}