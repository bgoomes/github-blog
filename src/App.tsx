import { Header } from "./componentes/Header";
import { UserCard } from "./componentes/UserCard";
import { Layout } from "./styles/Layout";

export function App() {
  return (
    
     <div>
       <Header />
       <Layout>
         <UserCard />
       </Layout> 
    </div>
      
  )
    
}
