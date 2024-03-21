import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { TelegramLogo } from 'phosphor-react'

const vismeApi = process.env.NEXT_PUBLIC_VISME_URL;

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'> 
        <Image
          width={330}
          height={410} 
          src="/vectors/circles.svg"
          alt="circles"
        />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Lets talk!</h2>
            <p>
            If you have questions or would just like to say hello, please contact me. 
            I will do my best to get back to you as soon as possible!
            </p>
          </div>

          <div className="contact">
            <Image 
              width={480} 
              height={500} 
              src="/contact.svg" 
              alt="imagem de contato" 
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'} legacyBehavior>
          <ButtonAlt>
            Contact Me{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
        <Link href= {vismeApi} legacyBehavior>
          <ButtonAlt style={{
            marginTop: '1rem',
          }}>
            Write a feedback{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
