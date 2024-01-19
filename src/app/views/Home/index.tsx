import { Background } from '@/app/components/Home/Background';

import './index.scss';
import Logo from '@/app/components/Logo';
import { Heading } from '@/app/components/common/Heading';

export const Home: React.FC = () =>
<>
     <nav className='nav-bar'>
        <div>
        <Logo/>
        </div>
     </nav>
    <section className="home">
    <Heading message="Привіт друже, Ми відкриваємось у березні! Чекаємо на тебе за адрессою:вул. Марашала Тимошенка 21 корп.14 (Smart Hub)" />
        <Background />
    </section></>

