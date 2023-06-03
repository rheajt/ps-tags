import getSections from "./getSections";
import { prompt } from "enquirer";
import quickReplace from "./quickReplace";

async function init() {
    const sections = getSections();

    const { section } = await prompt<{ section: string; tag: string }>({
        type: "autocomplete",
        name: "section",
        message: "What section would you like to view?",
        choices: sections.map((section) => section.section),
    });

    const choices = sections
        .filter((s) => s.section === section)[0]
        .tags.map((t) => ({
            name: t.name,
            message: `${quickReplace(t.name)} - ${t.desc} \n ex: ${quickReplace(
                t.ex
            )}`,
            value: quickReplace(t.disp),
        }));

    const resp = await prompt<{ tag: string }>({
        type: "autocomplete",
        name: "tag",
        message: "What tags would you like to view?",
        choices,
    });

    console.log(resp.tag);
}

init();
