import getQuestionsJSON from "@/app/utils/getQuestionsJSON";
import ScreenBuilder from "../components/screen-builder";
import { Screen } from "../types";
import client from "../utils/client";

export async function generateStaticParams() {
  const questionsJSON = await getQuestionsJSON();

  return Object.keys(questionsJSON).map((key) => ({ screen_id: key }));
}

interface ScreenPageProps {
  params: Promise<{
    screen_id: string;
  }>;
}

async function ScreenPage({ params }: ScreenPageProps) {
  const { screen_id: screenId } = await params;

  const gql = `
  query {
    screens {
      ${screenId} {
        screen_type,
      }
    }
  }
`;

  const screenData = (await client.query(gql)) as {
    screens: { [key: string]: Screen };
  };

  const data = JSON.stringify(screenData);

  console.log("data page level", data);

  return (
    <ScreenBuilder
      screenId={screenId}
      screenType={screenData.screens[screenId].screen_type}
    />
  );
}

export default ScreenPage;
