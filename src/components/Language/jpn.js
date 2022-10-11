// Import Detail Text
import { jpn as jpnDetails } from "./Details/jpn";

// Japan Text Variable
export const jpn = {
  sidebar: {
    home: "ホーム",
    aboutMe: "私の事",
    coding: "コーディング",
    projects: "プロジェクト",
    others: "他のこと",
    contact: "連絡先",
  },
  heroSection: {
    introduction: "こんにちは、私の名前は",
    name: "Tengku Luthfi Davyan",
    jobIntroduction: "私は",
    job1: "ソフトウェアエンジニア",
    lastWord: "です。",
    download: "CVをダウンロード",
  },
  aboutMe: {
    headline: "私の事",
    description:
      "私は情熱的で野心的で勤勉な人です, Web開発とモバイルアプリ開発とデザインにスキルと経験があります。私はプログラミングを始めたからもう4年間です。私はいつもたくさんの人を助けられるアプリを作りたいです。毎日私はいつも自分を成長させるために新しいことを学ぶようにしています。私はWeb開発、モバイルアプリケーション開発、デスクトップアプリケーション開発にフロントエンドもバックエンドの経験があります。 ２年前, フリーランサーとしてReact Nativeでモバイルアプリケーションのフロントエンドを作ったことがあります。 専門的な経験があまりありませんが私はプログラミングスキルを専門的な仕事にするつもりです。",
  },
  coding: {
    headline: "コーディング力",
    content: [
      {
        // Front End Section
        title: "フロントエンド",
        skills: [
          {
            name: "HTML 5",
            year: "4年間",
            img: "html5.png",
          },
          {
            name: "CSS",
            year: "4年間",
            img: "css.png",
          },
        ],
      },
      {
        // Backend Section
        title: "バックエンド",
        skills: [
          {
            name: "Python",
            year: "1年間",
            img: "python.png",
          },
          {
            name: "JavaScript",
            year: "３年間",
            img: "javascript.png",
          },
          {
            name: "Typescript",
            year: "1 Years",
            img: "typescript.png",
            rating: "5/5",
          },
          {
            name: "Java",
            year: "３年間",
            img: "java.png",
          },
          {
            name: "PHP",
            year: "３年間",
            img: "php.png",
          },
          {
            name: "C#",
            year: "6ヶ月",
            img: "csharp.svg",
          },
          {
            name: "Swift",
            year: "<6ヶ月",
            img: "swift.png",
          },
        ],
      },
      {
        // Framework Section
        title: "フレームワーク",
        skills: [
          {
            name: "React JS",
            year: "３年間",
            img: "react.png",
          },
          {
            name: "Django",
            year: "1年間",
            img: "django.png",
          },
          {
            name: "Vue JS",
            year: "6ヶ月",
            img: "vue.png",
          },
          {
            name: ".NET Core",
            year: "6ヶ月",
            img: "dotnet.png",
          },
          {
            name: "Next JS",
            year: "6 Months",
            img: "nextjs.png",
          },
        ],
      },
      {
        title: "モバイル",
        skills: [
          {
            name: "React Native",
            year: "3年間",
            img: "react.png",
          },
          {
            name: "Flutter",
            year: "<6ヶ月",
            img: "flutter.png",
          },
          {
            name: "iOS",
            year: "<6ヶ月",
            img: "ios.png",
          },
        ],
      },
      {
        // Database Section
        title: "データベース",
        skills: [
          {
            name: "MySQL",
            year: "2年間",
            img: "mysql.png",
          },
          {
            name: "MongoDB",
            year: "1年間",
            img: "mongodb.png",
          },
          {
            name: "SQL Server",
            year: "6ヶ月",
            img: "sqlServer.svg",
          },
          {
            name: "Firebase",
            year: "1 Years",
            img: "firebase.png",
          },
        ],
      },

      {
        // Other Section
        title: "他の",
        skills: [
          {
            name: "GIT",
            year: "1年間",
            img: "git.png",
          },
          {
            name: "Restful API",
            year: "1年鑑",
            img: "rest.png",
          },
        ],
      },
    ],
  },
  projects: {
    headline: "プロジェクト",
    portfolio: {
      projectName: "私のポルトフォリオ",
      desc: "自己紹介をするそして私のスキルと経験を覧せるためにポルトフォリオウェッブサイトです。このウェッブサイトはReact Jsフレームワークで作りました。",
      link: "https://tengkudavyan.com",
      githubLink: "https://github.com/tengkudavyan/portfolio",
      details: jpnDetails.portfolio,
    },
    rechatting: {
      projectName: "ReChatting",
      desc: "タグに基づいて公共などプライベートのチャットルームを作成事ができるチャットWebサイトアプリケーションです。DjangoフレームワークとMongo DBデータベースで作りました。",
      details: jpnDetails.rechatting,
    },
    dolla: {
      projectName: "dolla",
      desc: "React Jsフレームワークで作りましたフロントエンドウェッブサイトです。このサイト作る理由は私のフロントエンドウェッブサイト開発力を見せるために特にReact Jsフレームワークです。",
      link: "https://dolla.tengkudavyan.com",
      githubLink: "https://github.com/tengkudavyan/dolla",
      details: jpnDetails.dolla,
    },
    trvl: {
      projectName: "TRVL",
      desc: "React Jsフレームワークで作りましたフロントエンドウェッブサイトです。私のフロントエンドウェッブサイト開発力を見せるために旅行テーマのウェッブサイト。",
      link: "https://trvl.tengkudavyan.com",
      githubLink: "https://github.com/tengkudavyan/React-Js-Travel-Web",
      details: jpnDetails.trvl,
    },
    visitWeb: "サイトを見る",
    seeDetails: "詳細を見る",
    seeCode: "コードを見る",
  },
  others: {
    headline: "他のこと",
    history: {
      headline: "経験",
      contents: [
        {
          headline: "ソフトウェア開発者（フロントエンド）- Ruangguru",
          subHeadline: [
            "UI/UXデザインをフロントエンドに実装",
            "デプロイされたプロジェクト・製品にバグ修正",
            "プロジェクト管理にモノレポを使用する",
            "コード併合の前に他の同僚のコードをレビュー",
            "React JSのフロントエンドにREST APIを実装",
            "他の同僚に簡単な使えるシェアコンポーネントを作る",
          ],
          timePlace: "ジャカルタ、インドネシア (11月 2021年 ー 現在)",
        },
        {
          headline: "ソフトウェア開発者 - YVentures Group PTE. LTD.",
          subHeadline: [
            "Fullrest API のバックエンドを作成する",
            "UI/UXデザインをフロントエンドに実装",
            "フロントエンドにREST APIを実装",
            "データベース構造の設計",
          ],
          timePlace: "メダン、インドネシア (6月 2021年 ー 11月 2021年)",
        },
        {
          headline: "フルスタック開発者 - PT. Cipta Kerja Nusantara",
          subHeadline: [
            "Fullrest API のバックエンドを作成する",
            "UI/UXデザインをフロントエンドに実装",
            "フロントエンドにREST APIを実装",
            "データベース構造の設計",
          ],
          timePlace: "メダン、インドネシア (2月 2021年 ー 6月 2021)",
        },
        {
          headline: "モバイルアプリ開発 - フリランス仕事",
          subHeadline: [
            "UI/UXデザインをあモバイルに実装",
            "バックエンドエンジニアと協力し、Fullrest APIバックエンドをAndroidに実装する",
          ],
          timePlace: "メダン, インドネシア (2019年)",
        },
      ],
    },
    language: {
      headline: "言語",
      language1: {
        headline: "英語",
        level: "ビジネスレベル",
        percent: "75%",
      },
      language2: {
        headline: "日本語",
        level: "日常会話 - 日本語能力試験３級",
        percent: "60%",
      },
      language3: {
        headline: "インドネシア語",
        level: "自国語",
        percent: "100%",
      },
    },
  },
  contactMe: {
    headline: "連絡先",
    nameInput: "名前 :",
    namePlaceholder: "あなたの名前",
    emailInput: "メイル :",
    emailPlaceholder: "あなたのメイル",
    messageInput: "メッセージ :",
    sendButton: "メッセージを送る",
    id: "ID  : ",
    phoneNumber: "電話番号 : ",
    email: "tengkudavyan@gmail.com",
    phone: "+62 812 6234 2529",
    lineId: "tengku.davyan17",
    linkedin: "Tengku Davyan",
    github: "github.com/tengkudavyan",
    telegramId: "@tengkudavyan",
    addHint: "* 連絡先を追加するためにクリックしてください",
    sendSuccess: "メッセージが送られました",
  },
};
