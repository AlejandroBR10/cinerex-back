--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3 (Debian 14.3-1.pgdg110+1)
-- Dumped by pg_dump version 14.3 (Debian 14.3-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    "customerId" uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "customerName" text NOT NULL,
    "customerLastName" text NOT NULL,
    "customerEmail" character varying NOT NULL,
    "customerPhoneNumber" text NOT NULL,
    "userId" uuid
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: movie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie (
    "movieId" integer NOT NULL,
    "movieTitle" text NOT NULL,
    "movieDescription" text NOT NULL,
    "movieDurationMinutes" integer NOT NULL,
    "movieGenre" text NOT NULL,
    "movieImageUrl" text,
    "movieTrailer" text
);


ALTER TABLE public.movie OWNER TO postgres;

--
-- Name: movie_movieId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."movie_movieId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."movie_movieId_seq" OWNER TO postgres;

--
-- Name: movie_movieId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."movie_movieId_seq" OWNED BY public.movie."movieId";


--
-- Name: room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room (
    "roomId" uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "roomName" text NOT NULL,
    "roomCapacity" integer NOT NULL
);


ALTER TABLE public.room OWNER TO postgres;

--
-- Name: showtime; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.showtime (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "dateTime" timestamp without time zone NOT NULL,
    price numeric NOT NULL,
    "remainingSeats" integer NOT NULL,
    lenguage text NOT NULL,
    "movieId" integer,
    "roomId" uuid
);


ALTER TABLE public.showtime OWNER TO postgres;

--
-- Name: ticket; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ticket (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    price integer NOT NULL,
    "purchaseDate" timestamp without time zone NOT NULL,
    "customerId" uuid,
    "showTimeId" uuid
);


ALTER TABLE public.ticket OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    "userId" uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "userEmail" text NOT NULL,
    "userPassword" text NOT NULL,
    "userRoles" text DEFAULT 'Customer'::text NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: movie movieId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie ALTER COLUMN "movieId" SET DEFAULT nextval('public."movie_movieId_seq"'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer ("customerId", "customerName", "customerLastName", "customerEmail", "customerPhoneNumber", "userId") FROM stdin;
\.


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movie ("movieId", "movieTitle", "movieDescription", "movieDurationMinutes", "movieGenre", "movieImageUrl", "movieTrailer") FROM stdin;
\.


--
-- Data for Name: room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room ("roomId", "roomName", "roomCapacity") FROM stdin;
\.


--
-- Data for Name: showtime; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.showtime (id, "dateTime", price, "remainingSeats", lenguage, "movieId", "roomId") FROM stdin;
\.


--
-- Data for Name: ticket; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ticket (id, price, "purchaseDate", "customerId", "showTimeId") FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" ("userId", "userEmail", "userPassword", "userRoles") FROM stdin;
\.


--
-- Name: movie_movieId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."movie_movieId_seq"', 1, false);


--
-- Name: room PK_45770efde052e41dee06d89c85c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT "PK_45770efde052e41dee06d89c85c" PRIMARY KEY ("roomId");


--
-- Name: showtime PK_46e9942cf953d98b7dc4392a3e8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.showtime
    ADD CONSTRAINT "PK_46e9942cf953d98b7dc4392a3e8" PRIMARY KEY (id);


--
-- Name: customer PK_71302d30c27acbf513b3d74f81c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "PK_71302d30c27acbf513b3d74f81c" PRIMARY KEY ("customerId");


--
-- Name: movie PK_9fb5b27579ee465fa6c03dc09c9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "PK_9fb5b27579ee465fa6c03dc09c9" PRIMARY KEY ("movieId");


--
-- Name: user PK_d72ea127f30e21753c9e229891e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId");


--
-- Name: ticket PK_d9a0835407701eb86f874474b7c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY (id);


--
-- Name: customer REL_3f62b42ed23958b120c235f74d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "REL_3f62b42ed23958b120c235f74d" UNIQUE ("userId");


--
-- Name: user UQ_85432bb369f1a54116c4e4d2ee2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_85432bb369f1a54116c4e4d2ee2" UNIQUE ("userEmail");


--
-- Name: customer UQ_fbeb14502d4d7af4335187350f2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "UQ_fbeb14502d4d7af4335187350f2" UNIQUE ("customerEmail");


--
-- Name: ticket FK_0c95dfc1d86c240c26f77f85a28; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT "FK_0c95dfc1d86c240c26f77f85a28" FOREIGN KEY ("showTimeId") REFERENCES public.showtime(id);


--
-- Name: showtime FK_1af27f8171269552599f8e18ff1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.showtime
    ADD CONSTRAINT "FK_1af27f8171269552599f8e18ff1" FOREIGN KEY ("movieId") REFERENCES public.movie("movieId");


--
-- Name: customer FK_3f62b42ed23958b120c235f74df; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "FK_3f62b42ed23958b120c235f74df" FOREIGN KEY ("userId") REFERENCES public."user"("userId");


--
-- Name: showtime FK_5dbe760796ab36699aee894d255; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.showtime
    ADD CONSTRAINT "FK_5dbe760796ab36699aee894d255" FOREIGN KEY ("roomId") REFERENCES public.room("roomId");


--
-- Name: ticket FK_8932781487db15d1393b206482e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT "FK_8932781487db15d1393b206482e" FOREIGN KEY ("customerId") REFERENCES public.customer("customerId");


--
-- PostgreSQL database dump complete
--

