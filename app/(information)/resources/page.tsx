import Bylaws from "@/components/resources/bylaws/bylaws";

export default function ResourcesPage() {
    return (
        <section>
            <a
                href="https://bylaws.umsg.app/Constitution.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Constitution
            </a>
            <a
                href="https://bylaws.umsg.app/financial_policies.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Financial Policies
            </a>
            <a
                href="https://bylaws.umsg.app/fepc_guidelines.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                FEPC Guidelines
            </a>
            <a
                href="https://bylaws.umsg.app/employment_policies.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Employment Policies
            </a>
            <a
                href="https://bylaws.umsg.app/sorp.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                SORP
            </a>
            <a
                href="https://bylaws.umsg.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Standing Rules
            </a>

            <Bylaws />

        </section>
    );
}
