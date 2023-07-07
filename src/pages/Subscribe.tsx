import { useState, FormEvent } from 'react';
import { Logo } from '../components/Logo';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate('/series');
  }

  return (
    <div className="min-h-screen bg-posters bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-4xl leading-tight font-medium">
            A VideoStar promove a arte e a cultura dos animes e filmes para uma
            comunidade de fãs apaixonados no mundo todo.
          </h1>
        </div>
        <div className="p-8 bg-gray-800 border border-zinc-800 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
            action=""
          >
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Digite seu nome completo"
              className="bg-zinc-900 placeholder:text-zinc-400 rounded px-5 h-14"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-zinc-900 placeholder:text-zinc-400 rounded px-5 h-14"
            />

            <button
              disabled={loading}
              className="mt-4 disabled:cursor-not-allowed disabled:opacity-50 py-4 bg-orange-500 font-bold text-base rounded uppercase hover:brightness-75"
              type="submit"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
