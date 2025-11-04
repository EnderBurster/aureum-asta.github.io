import '../css/Timeline.css'
import { motion } from "framer-motion";

export default function Timeline() {
    const events = [
        { year: "03/03/2025", title: "Aureum Asta Opens", description: "On this day, the gates of Aureum Asta were opened to the world, marking the dawn of a new era." },
        { year: "03/03/2025", title: "First Death", description: "The first mortal life claimed within Aureum Asta. Ender_Burster fell to the blade of harvkush123, etching blood into the land’s history and shattering the illusion of safety in this newborn world." },
        { year: "04/03/2025", title: "The Nether", description: "For the first time, the veil between worlds was torn. Brave explorers breached the fiery depths of the Nether." },
        { year: "04/03/2025", title: "The Great Carrot Crusade", description: "In hopes to find the ingredient so vital for invisibility potions, Ender_Burster scrounges the world for any signs of carrots." },
        { year: "12/03/2025", title: "The Enchantment Shift", description: "A tremor rippled through the world’s arcane fabric as a new order of enchantment took hold. The ancient runes lost much of their power, leaving once-mighty gear inert, while strange new enchantments emerged to take their place." },
        { year: "12/03/2025", title: "Imperii Aeterna's First Center Discovered", description: "Accidentally stumbling upon it's nether portal, Saioo and Harvkush manage to uncover the then-hidden base of Ender_Burster, paying for that discover with countless deaths as the owner frantically attempted to salvage the situation. Aeterna was founded." },
        { year: "15/03/2025", title: "Duk Sword Bestowed", description: "The Duk Sword was bestowed to Harvkush as a gift from Custodis for the loss he sustained in the enchantment shift." },
        { year: "24/03/2025", title: "Lighthills Massacre", description: "For stealing an insignificant quantity of food in a time of starvation, Saioo and Harvkush massacre Ender_Burster, stealing his most precious belonging - the Divine Retribution. However, it is but a pyrrhic victory, for they too lost their most precious belonging - the Duk Sword. The scar of the conflict was left permanently edged in Ender_Burster - both on his physical vessel, and his mind." },
        { year: "25/03/2025", title: "Empires and Kingdoms Formerly Established", description: "This day marked the formal creation of Lighthills & Kyratos, joining Imperii Aeterna as major political powers." },
        { year: "06/04/2025", title: "Night of Awakening", description: "A dreaded turning point in the world’s history, when the once-mindless creatures of the dark grew aware, their strength and malice deepened by an unseen force. From that night onward, the balance of the Overworld shifted—the nights were now truly dangerous." },
        { year: "17/04/2025", title: "The Heretical Flood", description: "From distant and nameless lands came a tide of wayward souls — heretics and jesters cloaked in chaos. Their presence brought mockery and disorder to Aureum Asta, a blight upon reason itself. Yet their reign was brief; cast out by the realm’s true denizens, the heretics fled whence they came, leaving only echoes of their folly behind." },
        { year: "03/05/2025", title: "Imperii Aeterna declares War", description: "After months of silent skirmishes and shadowed raids, Imperii Aeterna cast aside diplomacy and raised its banners against Lighthills. The declaration marked the beginning of open war." },
        { year: "06/05/2025", title: "Lighthills' Cabin Burned", description: "In the raging days of the Aeternan–Lighthills War, Ender_Burster struck at the heart of his rivals, laying siege to one of Saioo’s strongholds in a desperate bid to reclaim the lost Divine Retribution. The assault ended in failure; though the relic eluded his grasp, the Cabin of Lighthills was left smoldering" },
        { year: "08/05/2025", title: "The Nether Amplification", description: "The infernal realm underwent a cataclysmic transformation as the Nether rose and deepened alike, its very foundations torn and reforged. Mountains of flame now reached higher than ever before, and chasms yawned twice as deep." },
        { year: "29/08/2025", title: "Unknown Force Summoned", description: "Ender_Burster summoned a being unknown, a wisp seen only from the corner of ones eyes." },
        { year: "27/10/2025", title: "First Joint Project", description: "In a rare pause amid the long and bitter war, Lighthills and Aeterna set aside their blades to forge a temporary alliance. Together, they raised a grand mob farm, a monument to cooperation and cunning." }
    ];

    return (
        <div className="timeline">
            {events.map((event, i) => (
                <motion.div
                    key={i}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                        <h3>{event.year}</h3>
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
