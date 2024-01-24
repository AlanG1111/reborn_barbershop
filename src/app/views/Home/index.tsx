import { Background } from '@/app/components/Home/Background';

import './index.scss';
import Logo from '@/app/components/Logo';
import { Heading } from '@/app/components/common/Heading';
import MarkerPoin from '@/app/components/common/MarkerPoint';

export const Home: React.FC = () =>
<>
     <nav className='nav-bar'>
        <div>
        <Logo/>
        </div>
     </nav>
    <section className="home">
    <Heading message="Привіт друже, Ми відкриваємось у березні! Чекаємо на тебе" />
        <Background />
        <MarkerPoin/>
    </section>
    </>

