import type { Metadata } from "next";

import Image from "next/image";
import banner from "/public/images/blogs/attachment-image.jpg";
import ParagraphLink from "../../../components/ParagraphLink";

export const metadata: Metadata = {
  title:
    "Feeling ‘Too Emotional’ in Your Relationship? Understanding Why Your Emotions Can Feel So Intense",
  description:
    "Do you pull away or feel ‘too emotional’ in relationships? Discover how therapy in Kitsilano, Vancouver or online can help you build secure, connected relationships.",
};

const MainContent = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl text-primary font-bold">
        Why You Pull Away or Hold On Too Tight: How Attachment Styles Shape Your
        Relationships
      </h1>
      <Image
        src={banner}
        alt="Understanding emotions in relationships"
        className="object-cover rounded-xl flex-shrink-0"
      />
      <p className="text-gray-500 text-sm italic">
        Do you pull away or feel ‘too emotional’ in relationships? Discover how
        counselling in Kitsilano, Vancouver or online can help you build secure,
        connected relationships.
      </p>

      <h1 className="text-4xl text-primary">
        Why Relationships Can Bring Up So Much Emotion
      </h1>
      <p>
        Conflict in relationships can stir up powerful emotions such as fear,
        anger, and sadness because they activate our deepest attachment needs
        for closeness and safety. If you find yourself shutting down,
        withdrawing, or fearing emotional intimacy, it’s often not that you’re
        &quot;
        <ParagraphLink href="/blog/understanding_emotions_in_relationships">
          too emotional
        </ParagraphLink>
        .&quot; More likely, your body is remembering pain or rejection from the
        past and reverting to protective patterns that once helped you cope.
      </p>
      <p>
        As infants and children, we rely on our caregivers to comfort us, help
        us regulate our emotions, and keep us safe. Through this process of{" "}
        <b>co-regulation</b>, we gradually learn how to soothe ourselves and
        feel secure. Over time, these early experiences shape our internal
        understanding or{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11010316/">
          working model
        </ParagraphLink>
        , of how relationships function.
      </p>
      <p>
        These early experiences become the foundation of our{" "}
        <b>attachment patterns</b>, the emotional blueprints that influence how
        we connect, handle conflict, trust, and respond to others. When care is
        inconsistent, neglectful, or abusive, these experiences can create
        patterns of anxiety or avoidance in relationships. As adults, we might
        find ourselves pulling away when things feel too close or fearing
        rejection when we need connection most.
      </p>
      <p>
        So if you notice yourself avoiding your partner or seeking constant
        reassurance, your nervous system may be reacting based on old
        experiences that once helped you survive.
      </p>

      <h1 className="text-4xl text-primary">
        Understanding Attachment Styles: Why You Pull Away or Hold On Too Tight
      </h1>
      <p>
        Attachment theory describes that early experiences with caregivers shape
        our emotional patterns in relationships. Throughout evolutionary
        history, infants depended on caregivers for protection and survival,
        which led to the development of a biological drive to seek safety and
        connection known as the{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4845754/">
          attachment system
        </ParagraphLink>
        . By staying near their caregivers, both physically and emotionally,
        children increase their chances of survival.
      </p>
      <p>
        How caregivers respond to and treat their children, especially during
        times of stress, plays a key role in shaping the expectations,
        attitudes, and beliefs, that children develop about relationships and
        carry into adulthood. These experiences form the foundation for
        different{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4845754/">
          attachment orientations
        </ParagraphLink>
        , such as secure, anxious, and avoidant.
      </p>

      <p>
        <ParagraphLink href="https://25717290.fs1.hubspotusercontent-eu1.net/hubfs/25717290/DT%20Blog/pdf-files/The-impact-of-attachment-insecurity-on-emotion-regulation-Sarah-McNeil.pdf">
          Responsive caregiving
        </ParagraphLink>{" "}
        meaning the caregiver consistently notices, understands, and meets a
        child’s needs which fosters a sense of trust and emotional security.
        Children learn to have confidence that others will be available in times
        of need.{" "}
      </p>
      <p>
        When caregiving is{" "}
        <ParagraphLink href="https://25717290.fs1.hubspotusercontent-eu1.net/hubfs/25717290/DT%20Blog/pdf-files/The-impact-of-attachment-insecurity-on-emotion-regulation-Sarah-McNeil.pdf">
          less responsive
        </ParagraphLink>
        , meaning inconsistent, neglectful, or dismissive the child adapts in
        ways that make sense for their environment. For example, if showing
        distress doesn’t bring comfort, the child may learn to hide their
        emotions and rely only on themselves, leading to an{" "}
        <b>avoidant attachment</b> pattern.
      </p>
      <p>
        Alternatively, if a caregiver is sometimes responsive and loving but
        other times unavailable, the child may become unsure whether their needs
        will be met. In this case, they may hyper-focus on the caregiver,
        seeking attention and reassurance, which can lead to{" "}
        <b>anxious attachment</b>.
      </p>
      <p>
        In situations where the caregiver is frightening, abusive, or highly
        unpredictable, the child may experience <b>disorganized attachment</b>,
        characterized by both seeking and fear closeness at the same time.
      </p>
      <p>
        Simplistically, these attachment orientations produce{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4845754/">
          if/then
        </ParagraphLink>{" "}
        working models that guide how we think, feel, and behave in
        relationships. These patterns form the foundation of our adult
        attachment styles:
      </p>
      <h3 className="text-xl">Anxious</h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          &quot;If I’m upset, then I worry my partner won’t be there for
          me.&quot;
        </li>
        <li>
          You might seek reassurance, feel panicked by distance, or worry your
          partner doesn’t care enough.
        </li>
      </ul>
      <h3 className="text-xl">Avoidant</h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          &quot;If I’m upset, then it feels safer to deal with it on my
          own.&quot;
        </li>
        <li>
          You may value independence and feel uncomfortable with emotional
          closeness, often pulling away when things feel too intense.
        </li>
      </ul>
      <h3 className="text-xl">Disorganized</h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          &quot;If I’m upset, then I want closeness but also feel scared of
          it.&quot;
        </li>
        <li>
          You might long for connection but also fear it, leading to mixed
          signals or difficulty trusting others.
        </li>
      </ul>
      <h3 className="text-xl">Secure</h3>
      <ul className="list-disc list-inside ml-4">
        <li>
          &quot;If I’m upset, then I trust I can turn to my partner for
          support.&quot;
        </li>
        <li>
          You feel comfortable depending on others while maintaining your
          independence and emotional balance.
        </li>
      </ul>
      <h1 className="text-4xl text-primary">
        Healing Attachment Wounds to Build Fullfilling Relationships
      </h1>
      <p>
        If you struggle with anxiety, fear of abandonment, difficulty
        communicating, or feeling disconnected in relationships, understanding
        your attachment patterns can be the first step toward relational
        healing.{" "}
      </p>
      <p>
        As a <b>Registered Clinical Counsellor (RCC)</b> in Kitsilano Vancouver,
        I use <b>Emotionally Focused Individual Therapy (EFIT)</b> to support
        you in noticing how your present emotional experiences may be influenced
        by past experiences. Through <b>engaged emotional encounters</b>, we
        revisit moments when your emotional needs were not fully met and learn
        to respond to these younger parts of yourself with compassion, care, and
        understanding.{" "}
      </p>
      <p>
        This process creates a <b>corrective emotional experience</b>, allowing
        your attachment system to learn that{" "}
        <b>vulnerability can coexist with safety</b>. Over time, these new
        emotional experiences help your nervous system feel safe in connection
        again.{" "}
      </p>
      <p>
        As this inner sense of safety grows, you may notice yourself relating to
        others in more open, balanced, and trusting ways. Therapy becomes a
        space to practice new ways of connecting with yourself and others that
        support greater <b>emotional resilience and relational security</b>.
      </p>
      <h1 className="text-4xl text-primary">
        Begin Feeling More Secure in Relationships
      </h1>
      <p>
        If you’re struggling with relationship challenges, emotional overwhelm,
        or fear of vulnerability, counselling can help you heal from past
        attachment wounds and develop loving, authentic relationships.{" "}
      </p>
      <p>
        I offer online counselling across British Columbia and in-person therapy
        in Kitsilano, Vancouver, for individuals who want to feel more secure,
        authentic, and at ease in their relationships.
      </p>
      <p>Reach out today to book a free consultation.</p>

      <p
        className={`inline-block px-4 py-2 rounded-md text-primary transition-colors bg-white`}
      >
        <ParagraphLink href="/book">
          🌿 <b>Book a free 15-minute consultation</b>
        </ParagraphLink>{" "}
        to start learning how to create relationships that feel secure,
        authentic, and connected.
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-6">
        <main className="flex-grow">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
