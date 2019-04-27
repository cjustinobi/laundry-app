--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: benefit_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.benefit_plans (
    id integer NOT NULL,
    benefit_id integer,
    plan_id integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.benefit_plans OWNER TO postgres;

--
-- Name: benefit_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.benefit_plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.benefit_plans_id_seq OWNER TO postgres;

--
-- Name: benefit_plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.benefit_plans_id_seq OWNED BY public.benefit_plans.id;


--
-- Name: benefits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.benefits (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.benefits OWNER TO postgres;

--
-- Name: benefits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.benefits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.benefits_id_seq OWNER TO postgres;

--
-- Name: benefits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.benefits_id_seq OWNED BY public.benefits.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plans (
    id integer NOT NULL,
    name character varying(255),
    price integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.plans OWNER TO postgres;

--
-- Name: plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plans_id_seq OWNER TO postgres;

--
-- Name: plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plans_id_seq OWNED BY public.plans.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    file_path character varying(255) NOT NULL,
    category_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    fullname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone integer,
    user_type integer DEFAULT 1 NOT NULL,
    plan_id integer,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: benefit_plans id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benefit_plans ALTER COLUMN id SET DEFAULT nextval('public.benefit_plans_id_seq'::regclass);


--
-- Name: benefits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benefits ALTER COLUMN id SET DEFAULT nextval('public.benefits_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: plans id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plans ALTER COLUMN id SET DEFAULT nextval('public.plans_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190225205704-create-plan.js
20190228181735-create-user.js
20190317121222-create-benefit-plan.js
20190317212530-create-benefit.js
20190409220751-create-category.js
20190409221749-create-product.js
\.


--
-- Data for Name: benefit_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.benefit_plans (id, benefit_id, plan_id, "createdAt", "updatedAt") FROM stdin;
25	\N	2	2019-04-04 16:23:59.999+00	2019-04-04 16:23:59.999+00
26	\N	3	2019-04-04 16:23:59.999+00	2019-04-04 16:23:59.999+00
27	\N	2	2019-04-04 16:41:06.516+00	2019-04-04 16:41:06.516+00
28	\N	1	2019-04-04 16:41:06.516+00	2019-04-04 16:41:06.516+00
29	\N	2	2019-04-04 17:00:05.427+00	2019-04-04 17:00:05.427+00
30	3	22	2019-04-04 17:22:15.147+00	2019-04-04 17:22:15.147+00
31	2	22	2019-04-04 17:22:15.147+00	2019-04-04 17:22:15.147+00
32	5	23	2019-04-08 18:02:24.305+00	2019-04-08 18:02:24.305+00
33	1	23	2019-04-08 18:02:24.305+00	2019-04-08 18:02:24.305+00
34	4	24	2019-04-08 18:03:03.805+00	2019-04-08 18:03:03.805+00
35	2	24	2019-04-08 18:03:03.805+00	2019-04-08 18:03:03.805+00
36	3	25	2019-04-08 18:05:42.411+00	2019-04-08 18:05:42.411+00
37	2	26	2019-04-08 18:09:53.67+00	2019-04-08 18:09:53.67+00
38	1	26	2019-04-08 18:09:53.67+00	2019-04-08 18:09:53.67+00
39	3	27	2019-04-08 18:21:41.175+00	2019-04-08 18:21:41.175+00
40	1	27	2019-04-08 18:21:41.175+00	2019-04-08 18:21:41.175+00
41	4	28	2019-04-08 18:22:50.287+00	2019-04-08 18:22:50.287+00
42	2	28	2019-04-08 18:22:50.287+00	2019-04-08 18:22:50.287+00
43	2	29	2019-04-08 18:24:33.079+00	2019-04-08 18:24:33.079+00
44	3	29	2019-04-08 18:24:33.079+00	2019-04-08 18:24:33.079+00
45	1	29	2019-04-08 18:24:33.079+00	2019-04-08 18:24:33.079+00
\.


--
-- Data for Name: benefits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.benefits (id, name, "createdAt", "updatedAt") FROM stdin;
1	dfgdgdd	2019-03-20 20:19:49.02+00	2019-03-20 20:19:49.02+00
2	dfgdgddg	2019-03-20 20:19:49.02+00	2019-03-20 20:19:49.02+00
3	Wash everything	2019-03-20 20:28:51.533+00	2019-03-20 20:28:51.533+00
4	zfsfsfsfsfs	2019-03-20 20:28:51.533+00	2019-03-20 20:28:51.533+00
5	wash heaven and earth	2019-03-20 20:28:51.533+00	2019-03-20 20:28:51.533+00
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
1	men	2019-04-12 00:35:22.383+00	2019-04-12 00:35:22.383+00
2	children	2019-04-12 00:35:22.383+00	2019-04-12 00:35:22.383+00
3	women	2019-04-12 00:35:22.383+00	2019-04-12 00:35:22.383+00
4	native	2019-04-12 01:27:48.456+00	2019-04-12 01:27:48.456+00
\.


--
-- Data for Name: plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plans (id, name, price, "createdAt", "updatedAt") FROM stdin;
28	hello1	4000	2019-04-08 18:22:50.199+00	2019-04-08 20:05:48.134+00
29	world22	2100	2019-04-08 18:24:32.97+00	2019-04-08 20:08:36.451+00
27	halleyah	300	2019-04-08 18:21:41.092+00	2019-04-08 20:15:48.436+00
26	editedz	100	2019-04-08 18:09:53.6+00	2019-04-09 07:36:26.309+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, file_path, category_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, fullname, email, phone, user_type, plan_id, password, "createdAt", "updatedAt") FROM stdin;
1	Justin	cjustinobi@gmail.com	1111111111	3	1	$2b$10$tI4y8F.3T8xDgf5DtSvYZePC.16y/S65c5AYLZ/Ick3bdXtMi2OpS	2019-03-19 07:25:53.843+00	2019-03-19 07:25:53.843+00
2	sfds	ds@ds.com	453453553	1	5	$2b$10$W/UGujmURGxL4sBhJBQTfelfJddxpTgWlgubGHAJ1fvolw3hygZia	2019-03-24 06:40:24.025+00	2019-03-24 06:40:24.025+00
3	fsdf	ds@dsfds.com	4534555	1	5	$2b$10$tu48BEx7NphjICF1e/b0meHnzJq0RmYypGE6ZtPgBKsTyQR2ZcrNi	2019-03-24 06:41:56.911+00	2019-03-24 06:41:56.911+00
4	Odjegba	shalonodjegba@yahoo.com	706288916	1	28	$2b$10$31Xs43Y7V0VdQ1aMOnw.B.ZkkmilKRpKBSE6C1PO7P1xglwrOowvG	2019-04-15 16:25:10.086+00	2019-04-15 16:25:10.086+00
\.


--
-- Name: benefit_plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.benefit_plans_id_seq', 45, true);


--
-- Name: benefits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.benefits_id_seq', 5, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 4, true);


--
-- Name: plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plans_id_seq', 29, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 30, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: benefit_plans benefit_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benefit_plans
    ADD CONSTRAINT benefit_plans_pkey PRIMARY KEY (id);


--
-- Name: benefits benefits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benefits
    ADD CONSTRAINT benefits_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: plans plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

