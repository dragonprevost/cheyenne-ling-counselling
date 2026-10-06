import type { Metadata } from "next";
import Image from "next/image";
import banner from "/public/images/forest-1.jpg";
import ParagraphLink from "../../../components/ParagraphLink";
import { H1, H2, H3 } from "@/components/layout/Heading";
import Prose from "@/components/layout/Prose";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";

const TITLE = "EMDR Therapy in Kitsilano, Vancouver: How It Works and What to Expect";
const DESCRIPTION =
  "What is EMDR therapy and how does it work? A Registered Clinical Counsellor explains the 8 phases of EMDR and how it can help with trauma, anxiety, and phobias in Kitsilano, Vancouver or online across BC.";
const PATH = "/blog/emdr_therapy";
const IMAGE = "/images/forest-1.jpg";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
});

const jsonLd = blogPostingJsonLd({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  datePublished: "2026-10-05",
});

const MainContent = () => {
  return (
    <Prose>
      <H1>
        EMDR Therapy in Kitsilano, Vancouver: How It Works and What to Expect
      </H1>
      <Image
        src={banner}
        alt="Mossy forest in British Columbia, representing grounding and safety in EMDR therapy"
        className="object-cover rounded-xl flex-shrink-0"
      />

      <p>
        As a Registered Clinical Counsellor offering EMDR therapy in
        Kitsilano, Vancouver, I am often asked about Eye Movement
        Desensitization and Reprocessing, commonly known as EMDR. If you are
        searching for EMDR counselling in Vancouver, you may be wondering:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>What is EMDR therapy?</li>
        <li>What does EMDR stand for?</li>
        <li>What happens in an EMDR session?</li>
        <li>How is EMDR different from traditional talk therapy?</li>
        <li>Is EMDR counselling right for me?</li>
      </ul>
      <p>
        People seek EMDR for many reasons, including trauma, anxiety,
        distressing memories, difficult life experiences, and strong
        emotional reactions that linger long after an event has passed.
      </p>
      <p>
        Maybe you have tried talk therapy but still feel stuck or overwhelmed
        when a certain memory resurfaces. Or perhaps something happened in
        the past, yet your body and emotions still react as though it is
        happening now.
      </p>
      <p>
        In this guide, I explain what EMDR is, how it works, what to expect
        in an EMDR session, how it compares to talk therapy, and how to
        decide whether it may be a good fit for you.
      </p>

      <H2>What Is EMDR Therapy?</H2>
      <p>
        <ParagraphLink href="https://www.emdria.org/about-emdr-therapy/">
          <b>Eye Movement Desensitization and Reprocessing (EMDR)</b>
        </ParagraphLink>{" "}
        is a structured, evidence-based form of psychotherapy that helps
        people process distressing memories and experiences that continue to
        affect how they think, feel, and respond in the present. EMDR is best
        known as a trauma therapy and a treatment for post-traumatic stress
        disorder (PTSD), but it can also support people with other
        experiences that cause ongoing emotional distress.
      </p>

      <H2>How Does EMDR Work?</H2>
      <p>
        To understand how EMDR counselling works, it helps to first look at
        how your brain normally processes experiences.
      </p>

      <H3>How Your Brain Normally Processes Experiences</H3>
      <p>
        EMDR is grounded in the{" "}
        <ParagraphLink href="https://doi.org/10.3389/fpsyg.2017.01578">
          adaptive information processing (AIP) model
        </ParagraphLink>
        , which proposes that your brain is constantly making sense of your
        experiences.
      </p>
      <p>
        Most of the time, your brain links new experiences to memories you
        have already stored. It keeps what is useful, updates what you have
        learned, and helps the experience become part of your life story.
      </p>
      <p>
        Think of it like organizing a library. New experiences are filed
        alongside related experiences, knowledge, and beliefs you have
        already developed.
      </p>

      <H3>Why Do Some Memories Get &quot;Stuck&quot;?</H3>
      <p>
        Have you ever wondered, &quot;Why do I still feel affected by
        something that happened years ago?&quot;
      </p>
      <p>
        Sometimes an experience is so overwhelming that it is not integrated
        the way other experiences are. The{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7671715/">
          <b>amygdala</b>
        </ParagraphLink>
        , which helps detect and respond to threat, works with stress
        hormones and neurotransmitters to shape how strongly emotional
        experiences are remembered. At the same time, high stress can
        interfere with some aspects of{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7671715/">
          <b>hippocampal</b>
        </ParagraphLink>{" "}
        functioning, including the processes that store memories and place
        them in context.
      </p>
      <p>
        As a result, an unprocessed distressing memory may stay tightly
        linked to the original emotions, physical sensations, and beliefs.
        Reminders of the event can then trigger those responses more easily.
      </p>
      <p>
        For example, after a car accident, you may know logically that you
        are safe, yet the sound of screeching tires can make your heart race,
        your body tense, or the thought &quot;I am not safe&quot; return. The
        sound has become associated with the original experience, so it can
        activate emotional and physical reactions even though the danger is
        over.
      </p>

      <H3>How Does EMDR Help a Memory Become &quot;Unstuck&quot;?</H3>
      <p>
        EMDR aims to help you process a distressing memory so it feels less
        overwhelming and is easier to recognize as something that happened in
        the past. As you process, you can also connect the experience with
        what you know about yourself and your life today.
      </p>
      <p>
        One proposed explanation involves memory reconsolidation. When you
        recall a memory, it may briefly become more open to change before it
        is stored again. During EMDR, you recall a distressing memory while
        staying connected to the present and engaging in bilateral
        stimulation. This may create an opportunity for new information, such
        as &quot;I am safe now,&quot; to become linked with the memory.
      </p>

      <H3>Dual Tasking: Why Bilateral Stimulation Matters in EMDR</H3>
      <p>
        During EMDR, you briefly bring the distressing memory to mind while
        also focusing on something happening in the present, such as
        following your therapist&apos;s fingers with your eyes. This lets you
        hold the memory in awareness while staying grounded in the here and
        now.
      </p>
      <p>
        Research suggests that bilateral stimulation, such as the eye
        movements used in EMDR, places demands on working memory. When you
        recall an emotional memory while tracking a moving finger, the memory
        may{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9623920/#Sec12">
          become less vivid and less intense
        </ParagraphLink>
        . One explanation is that focusing on both tasks at once makes it
        harder to hold the memory with the same emotional force. This is
        especially valuable because distressing memories can be uncomfortable
        or difficult to talk about.
      </p>
      <p>
        The goal of EMDR is not to erase a memory or make you forget what
        happened. It is to help you remember the experience without being
        overwhelmed by the emotions, body sensations, or beliefs attached to
        it.
      </p>
      <p>
        As the memory loses intensity, you may be better able to recognize
        what is true now, such as &quot;That happened then, and I am safe
        now,&quot; or &quot;I have choices now.&quot; You still remember what
        happened, but it no longer feels like it is happening all over again.
      </p>

      <H2>EMDR vs. Talk Therapy: What Is the Difference?</H2>
      <p>
        One of the questions I hear most is, &quot;How does EMDR differ from
        traditional talk therapy?&quot;
      </p>
      <p>
        In traditional talk therapy, you spend time discussing your thoughts,
        emotions, relationships, behaviours, and experiences. This can build
        insight, help you understand patterns, and create meaningful change.
      </p>
      <p>
        EMDR can also involve talking, but you do not need to describe a
        traumatic experience in extensive detail.
      </p>
      <p>
        Instead, EMDR uses a structured process to identify parts of an
        experience, such as an image, thought, emotion, or body sensation,
        while you engage in dual-task stimulation. This may involve following
        your therapist&apos;s fingers with your eyes, alternating taps, or
        alternating sounds.
      </p>

      <H2>What Happens in an EMDR Session? The 8 Phases of EMDR, Simplified</H2>

      <H3>Phase 1: History Taking and Treatment Planning</H3>
      <p>
        You and your counsellor explore your{" "}
        <ParagraphLink href="https://www.emdria.org/blog/the-eight-phases-of-emdr-therapy/">
          history
        </ParagraphLink>
        , current symptoms, and experiences that may be connected to what is
        bothering you now.
      </p>
      <p>
        Together, you identify target memories, meaning past experiences
        that appear connected to your current symptoms, beliefs, or
        reactions.
      </p>
      <p>
        For example, if you feel panicky every time you are in a car, the
        target memory might be a car accident from years ago. For someone who
        struggles to trust others, it might be an early experience of being
        let down or dismissed.
      </p>
      <p>
        Your therapist helps you decide which target memories to work on and
        in what order.
      </p>

      <H3>Phase 2: Preparation</H3>
      <p>
        In the preparation phase, your counsellor explains the EMDR process
        and answers any questions or concerns.
      </p>
      <p>
        Before trauma processing begins, your therapist helps you build
        internal resources and a toolkit of calming techniques. This may
        include grounding skills, a safe or calm place visualization, and an
        introduction to what bilateral stimulation feels like.
      </p>
      <p>This phase is about building stability and trust, not confronting distressing memories.</p>

      <H3>Phase 3: Assessment</H3>
      <p>Here, a target memory is broken into its components before processing begins:</p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <b>Image:</b> The specific image that represents the most
          distressing part of the memory.
        </li>
        <li>
          <b>Negative belief:</b> The belief you hold about yourself in
          relation to the memory, such as &quot;I am not safe.&quot;
        </li>
        <li>
          <b>Emotions:</b> What you feel, such as panic, anxiety, guilt,
          sadness, or anger.
        </li>
        <li>
          <b>Body sensation:</b> Where you notice it in your body, such as a
          racing heart, tightness, or tension.
        </li>
        <li>
          <b>Positive belief:</b> What you would prefer to believe about
          yourself now, such as &quot;I am safe now.&quot;
        </li>
      </ul>

      <H3>Phase 4: Desensitization</H3>
      <p>
        This is the active reprocessing phase. You hold the memory in mind
        while engaging in bilateral stimulation, such as eye movements,
        tapping, or alternating tones, in short sets. Between sets, you pause
        to notice what you are experiencing and what may have shifted.
      </p>

      <H3>Phase 5: Installation</H3>
      <p>
        Once recalling the memory no longer brings up the same intensity,
        meaning you can think about what happened without feeling as
        overwhelmed, panicked, or activated, your therapist helps you focus
        on the positive belief you identified.
      </p>
      <p>
        Through continued processing, this belief can become more believable
        and easier to access when you think about the experience. For
        example, instead of the memory automatically bringing up &quot;I am
        powerless,&quot; you may increasingly recognize &quot;I have choices
        now.&quot;
      </p>

      <H3>Phase 6: Body Scan</H3>
      <p>
        You check in with your body for any remaining tension or discomfort
        connected to the memory. If anything remains, it can be explored and
        processed.
      </p>

      <H3>Phase 7: Closure</H3>
      <p>
        Every EMDR session ends with closure and stabilization. Your
        therapist makes sure you have the tools to leave the session feeling
        grounded, even if a particular memory has not been fully processed.
      </p>

      <H3>Phase 8: Reevaluation</H3>
      <p>
        At the start of the next session, your therapist checks in on how
        the processed memory feels now and whether any new thoughts,
        emotions, memories, or reactions have come up.
      </p>

      <H2>What Can EMDR Counselling Help With?</H2>

      <H3>EMDR for Trauma and PTSD</H3>
      <p>
        EMDR was originally developed for trauma-related distress, and PTSD
        remains one of its most extensively researched uses.
      </p>
      <p>
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9778888/">
          Research
        </ParagraphLink>{" "}
        has found EMDR to be similarly effective to cognitive behavioural
        therapy (CBT) for treating PTSD. Several clinical guidelines also
        recommend EMDR as a{" "}
        <ParagraphLink href="https://www.mdpi.com/2077-0383/10/18/4175">
          first-line psychological treatment
        </ParagraphLink>{" "}
        for PTSD, alongside other evidence-based trauma-focused therapies.
      </p>
      <p>
        That said, not everyone who goes through something difficult or
        frightening develops PTSD. You do not need a formal PTSD diagnosis to
        seek support for a memory or experience that still feels distressing.
      </p>
      <p>EMDR can help people process a wide range of experiences, including:</p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <b>Single-event trauma,</b> such as a car accident, fall, or
          frightening event
        </li>
        <li>
          <b>Accidents and injuries</b> that continue to trigger fear,
          anxiety, or distress
        </li>
        <li>
          <b>Assault or violence</b>, including physical or sexual assault
        </li>
        <li>
          <b>Medical experiences</b>, such as a difficult diagnosis, surgery,
          medical procedure, or birth experience
        </li>
        <li>
          <b>Childhood abuse or neglect</b>, including physical, emotional, or
          sexual abuse, or feeling unsafe, unwanted, or unsupported
        </li>
        <li>
          <b>Complex or repeated trauma</b>, involving prolonged or repeated
          abuse, neglect, violence, or other adversity, particularly in
          childhood
        </li>
      </ul>

      <H3>EMDR for Anxiety and Panic</H3>
      <p>
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11446293/">
          Past experiences can shape anxiety
        </ParagraphLink>{" "}
        by teaching your mind and body to expect danger, so certain
        situations, thoughts, or sensations trigger a strong sense of threat
        even when you are safe. EMDR can help process memories that may be
        contributing to anxiety, panic, or a persistent feeling of being
        unsafe.
      </p>
      <p>
        Research has found EMDR to be effective for{" "}
        <ParagraphLink href="https://www.sciencedirect.com/science/article/abs/pii/S0022395619313160">
          anxiety disorders
        </ParagraphLink>
        , with reductions in anxiety, panic, and phobia symptoms, as well as
        some behavioural and physical symptoms.
      </p>
      <p>
        By processing the memories behind these reactions, EMDR may reduce
        their emotional intensity and make it easier for your mind and body
        to recognize that the past experience is over. This creates more
        room to respond to what is happening now, rather than reacting
        automatically as though the earlier danger has returned.
      </p>
      <p>
        For people whose anxiety makes it hard to{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4050739/">
          sleep
        </ParagraphLink>
        , EMDR may help by processing distressing memories that keep the mind
        and body on alert. As these memories become less activating, it may
        become easier to relax, settle, and sleep.
      </p>

      <H3>EMDR for Phobias and Specific Fears</H3>
      <p>
        <ParagraphLink href="https://www.sciencedirect.com/science/article/abs/pii/S0022395619313160">
          Research
        </ParagraphLink>{" "}
        suggests EMDR can reduce symptoms of phobias such as fear of flying,
        driving, needles, or heights.
      </p>
      <p>
        Phobias can develop after a frightening experience. A car accident
        may lead to a fear of driving, or a difficult medical procedure may
        lead to a fear of hospitals or needles. When a fear is tied to a
        distressing past experience, EMDR can help process the memory and
        reduce its intensity, so previously triggering situations feel less
        threatening.
      </p>

      <H3>EMDR for Negative Beliefs About Yourself</H3>
      <p>
        Difficult experiences, especially in childhood, can have a lasting
        impact on how you see yourself. Over time, they can shape beliefs
        about who you are, your worth, and what to expect from others.
      </p>
      <p>
        You may come to believe things like &quot;I am not good enough,&quot;
        &quot;I am unsafe,&quot; &quot;I am powerless,&quot; &quot;I am
        unlovable,&quot; or &quot;It is my fault.&quot; These beliefs can
        continue to affect your relationships, self-worth, and how you
        respond to situations today.
      </p>
      <p>
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11395866/">
          Research
        </ParagraphLink>{" "}
        published in 2024 found that, among people with childhood-related
        PTSD, changes in negative beliefs about themselves were associated
        with later improvements in PTSD symptoms. This suggests that changing
        how someone views themselves may be an important part of recovery,
        rather than simply a result of feeling better.
      </p>
      <p>
        EMDR addresses these beliefs by identifying the negative belief tied
        to a distressing memory and helping you develop a more adaptive
        perspective. For example, someone who believed &quot;I am not good
        enough&quot; may gradually come to believe &quot;I am enough.&quot;
        Over time, the goal is for that new belief to feel increasingly true
        when you remember the experience.
      </p>

      <H2>EMDR Counselling in Kitsilano, Vancouver, and Online Across BC</H2>
      <p>
        EMDR is not about forgetting what happened or erasing difficult
        memories. It helps you reprocess experiences that still feel
        distressing, so you can remember what happened without the same
        level of emotional or physical distress. The goal is for the
        experience to feel more like something in the past, rather than
        something your mind and body keep reacting to in the present.
      </p>
      <p>
        If you are looking for an EMDR counsellor in Kitsilano, I offer
        in-person EMDR counselling for adults from my office at 1764 W 7th
        Ave, Vancouver, BC V6J 5A3. My approach is collaborative,
        trauma-informed, and tailored to your needs, with 50-minute sessions.
      </p>
      <p>
        I also offer online EMDR counselling throughout British Columbia.
        Whether you live in Vancouver, Victoria, the Okanagan, the Sunshine
        Coast, the North, or a smaller community, you can receive EMDR
        therapy by secure video from the comfort and privacy of your own
        space. Online EMDR uses the same structured eight-phase process as
        in-person sessions, with bilateral stimulation adapted for virtual
        use, such as guided eye movements on screen or self-tapping. It can
        be a practical option if you live outside Vancouver, have a busy
        schedule, or simply feel more at ease at home.
      </p>

      <p className="inline-block px-4 py-2 rounded-md text-primary transition-colors bg-white">
        <ParagraphLink href="/book">
          🌿 <b>Book a free 15-minute consultation</b>
        </ParagraphLink>{" "}
        and we can talk about what brings you to counselling, answer your
        questions, and explore whether in-person or online EMDR therapy fits
        your needs.
      </p>
    </Prose>
  );
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto p-6">
        <main className="flex-grow">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
