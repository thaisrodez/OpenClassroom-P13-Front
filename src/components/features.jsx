import iconChat from '../img/icon-chat.png';
import iconMoney from '../img/icon-money.png';
import iconSecurity from '../img/icon-security.png';
import '../styles/components/features.css';

const featuresData = [
  {
    id: 1,
    icon: iconChat,
    iconDescription: 'Chat Icon',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    id: 2,
    icon: iconMoney,
    iconDescription: 'Money Icon',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    id: 3,
    icon: iconSecurity,
    iconDescription: 'Security Icon',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

export function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <div key={feature.id} className="feature-item">
          <img
            src={feature.icon}
            alt={feature.iconDescription}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  );
}
