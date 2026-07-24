import Portrait from './components/portrait';

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="welcomePageHeader">Nyam's Page</h1>
        <p className="profilePageDescriptor"> My name is Nyam, and this is my profile page</p>
      </div>

      <div>
        <Portrait></Portrait>
        <p className="homepageDesc">some description</p>
      </div>
    </div>
  );
}
