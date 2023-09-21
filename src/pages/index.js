import Card from '@/components/card/card';
import SignupForm from '@/components/form/form';
import Meta from '@/components/meta/meta';
import PageContainer from '@/components/page-container/page-container';

export default function Home() {
  return (
    <>
      <Meta />
      <PageContainer>
        <Card />
        <SignupForm />
      </PageContainer>
    </>
  );
}
