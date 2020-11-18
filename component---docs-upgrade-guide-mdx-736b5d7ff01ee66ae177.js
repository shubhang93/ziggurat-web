(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5Oa6":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("hhGP"),p=(n("qKvR"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Upgrade-guide.mdx"}});var c={_frontmatter:p},l=r.a;function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"upgrade-guide-for-ziggurat-310"},"Upgrade Guide for Ziggurat 3.1.0"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"configuration-changes"},"Configuration Changes"),Object(o.b)("p",null,"There were some breaking changes to kafka streams library being used by Ziggurat version 3.0.\nZiggurat 3.0 has upgraded kafka streams to v2.1. This requires the user to follow certain steps while\nupgrading. These are explained below."),Object(o.b)("p",null,"For upgrading Ziggurat to 3.1.0, per ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org/21/documentation/streams/upgrade-guide"}),"Apache Kafka Upgrade Guide"),"\nand ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/KAFKA/KIP-268%3A+Simplify+Kafka+Streams+Rebalance+Metadata+Upgrade#KIP-268:SimplifyKafkaStreamsRebalanceMetadataUpgrade-Upgradingto2.0:"}),"KIP-268"),", the user need to follow these steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new config ",Object(o.b)("inlineCode",{parentName:"li"},"upgrade-from")," for each of the top level config-map in :stream-router section of\nconfig.edn. This config can be added either in ",Object(o.b)("inlineCode",{parentName:"li"},"config.edn")," file in the project or as an environment\nvariable,\nas explained below."),Object(o.b)("li",{parentName:"ul"},"Do a rolling deploy of the application with the newly added configuration (above)."),Object(o.b)("li",{parentName:"ul"},"Remove the configs added above"),Object(o.b)("li",{parentName:"ul"},"Do a rolling deploy of the application again.")),Object(o.b)("p",null,"This can be understood with the help of an example. For the following stream-router configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),':stream-router        {:topic-entity-1       {:application-id                 "application-1"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "first-topic"}}\n                      {:topic-entity-2       {:application-id                 "application-2"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "second-topic"}}\n')),Object(o.b)("p",null,"For projects using Ziggurat version <= 2.7.2, (",Object(o.b)("inlineCode",{parentName:"p"},'[tech.gojek/ziggurat "2.6.0"]'),", for example),\nthe new stream-router config should look like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),':stream-router        {:topic-entity-1       {:application-id                 "application-1"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "first-topic"\n                                              :upgrade-from                   "0.11.0"}}\n                      {:topic-entity-2       {:application-id                 "application-2"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "second-topic"\n                                              :upgrade-from                   "0.11.0"}}\n')),Object(o.b)("p",null,"Or, if the user is not comfortable with modifying ",Object(o.b)("inlineCode",{parentName:"p"},"config.edn"),", equivalent environment variables can be added to\nthe project environment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"ZIGGURAT_STREAM_ROUTER_TOPIC_ENTITY_1_UPGRADE_FROM=0.11.0\nZIGGURAT_STREAM_ROUTER_TOPIC_ENTITY_2_UPGRADE_FROM=0.11.0\n")),Object(o.b)("p",null,"For projects using Ziggurat version > 2.7.2, (",Object(o.b)("inlineCode",{parentName:"p"},'[tech.gojek/ziggurat "2.12.1"]'),", for example), the new stream-router config\nshould look like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),':stream-router        {:topic-entity-1       {:application-id                 "application-1"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "first-topic"\n                                              :upgrade-from                   "1.1"}}\n                      {:topic-entity-2       {:application-id                 "application-2"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "second-topic"\n                                              :upgrade-from                   "1.1"}}\n')),Object(o.b)("p",null,"Or, an equivalent environment variable can be added for each of the entiteis in ",Object(o.b)("inlineCode",{parentName:"p"},"stream-router")," section. Like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"ZIGGURAT_STREAM_ROUTER_TOPIC_ENTITY_1_UPGRADE_FROM=1.1\nZIGGURAT_STREAM_ROUTER_TOPIC_ENTITY_2_UPGRADE_FROM=1.1\n")),Object(o.b)("h2",{id:"using-middlewares"},"Using Middlewares"),Object(o.b)("p",null,"In the versions preceding 3.0, Ziggurat would only process messages which were serialized\nin protobuf format. This was a major limitation as users could not use any other formats like JSON\nor Avro. "),Object(o.b)("p",null,"In Ziggurat 3.0, the logic for deserialization has been extracted out as middlewares\nwhich can be used not only for deserializing a message in any given format, but\ncan be plugged together to perform a set of tasks before a message is processed."),Object(o.b)("p",null,"You can read more about them at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gojek/ziggurat#middleware-in-ziggurat"}),"Ziggurat Middlewares")),Object(o.b)("p",null,"As far as message processing is concerned, messages will be provided as byte arrays and the user\nhas to explicitly use ",Object(o.b)("inlineCode",{parentName:"p"},"ziggurat.middleware.default/protobuf->hash")," to deserialize a message\nbefore processing it."),Object(o.b)("p",null,"For example, in previous versions, for this stream-routes configuration,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),':stream-router        {:topic-entity-1       {:application-id                 "application-1"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "first-topic"}}\n                                              :channels {:geofence-channel {:worker-count [10 :int]\n                                                         :retry            {:count [3 :int]}}}}\n                      {:topic-entity-2       {:application-id                 "application-2"\n                                              :bootstrap-servers              "localhost:9092"\n                                              :origin-topic                   "second-topic"}}\n                                                                                                                                                                             :enabled [true :bool]\n')),Object(o.b)("p",null,"a mapper function in a Ziggurat-based project would look like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"(init/main start-fn stop-fn {:topic-entity-1 {:handler-function  mapper-fn \n                                              :geofence-channel  channel-mapper-fn}\n                             topic-entity-2  {:handler-function  mapper-fn-2}})\n")),Object(o.b)("p",null,"An upgrade to Ziggurat 3.0 would require the user to write a new mapper function\nwhich explicitly deserializes the message using the proto middleware (provided in Ziggurat be default)\nbefore passing it as an argument to the old mapper function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"(def middleware-based-mapper-fn\n  (-> mapper-fn\n      (ziggurat.middleware.default/protobuf->hash com.gojek.esb.booking.BookingLogMessage :topic-entity-1)))\n      \n(def middleware-based-mapper-fn-2\n  (-> mapper-fn-2\n      (ziggurat.middleware.default/protobuf->hash com.gojek.esb.booking.BookingLogMessage :topic-entity-2)))\n      \n(def middleware-based-channel-mapper-fn\n  (-> channel-mapper-fn\n      (ziggurat.middleware.default/protobuf->hash com.gojek.esb.booking.BookingLogMessage :topic-entity-1)))\n\n(init/main start-fn stop-fn {:topic-entity-1 {:handler-function  middleware-based-mapper-fn \n                                              :geofence-channel  middleware-based-channel-mapper-fn}\n                             topic-entity-2  {:handler-function  middleware-based-mapper-fn-2}})\n")),Object(o.b)("p",null,"A similar change will be required for all the handler-functions/channel-functions in\n",Object(o.b)("inlineCode",{parentName:"p"},"stream-routes")," map which is passed to ",Object(o.b)("inlineCode",{parentName:"p"},"init/main"),"."),Object(o.b)("p",null,"Development is under way to provide a JSON middleware for deserializing JSON messages.\nIt is expected to be available in 3.1.0-alpha.2."))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Upgrade-guide.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-upgrade-guide-mdx-736b5d7ff01ee66ae177.js.map