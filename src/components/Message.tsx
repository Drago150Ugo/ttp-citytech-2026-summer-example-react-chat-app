import { faker } from "@faker-js/faker";

const Message = ({text}: {text: string}) => {

    // BUG: the name regenerates on every new message. old messages should retain their name
    const name = faker.person.fullName();

    return <>
      <p className='message'>
        {text} - {name}
      </p>
    </>;
}

export default Message;