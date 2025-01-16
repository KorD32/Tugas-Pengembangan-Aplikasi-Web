import React from "react";
import { KnowLedgeCard } from "../molecules/KnowLedgeCard";
import knowLedge from "../data/knowledge"; 
import "../style/knowledge.css"

export const KnowLedgeList = () => {
    return (
        <section className="knowledge-list" id="knowledge">
            <h1>Perlu kamu tahu!</h1>
            <div className="knowledge-slide">
                {knowLedge.map((know) => (
                    <KnowLedgeCard
                        key={know.id}
                        cover={know.cover}
                        title={know.title}
                        description={know.description}
                        link={know.link}
                    />
                ))}
            </div>
        </section>
    );
};
